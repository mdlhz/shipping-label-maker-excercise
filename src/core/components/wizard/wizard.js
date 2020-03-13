import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GetSenderAddress from "../../../features/shipping-label-maker/get-sender-address";
import GetReceiverAddress from "../../../features/shipping-label-maker/get-receiver-address";
import GetWeight from "../../../features/shipping-label-maker/get-weight";
import GetShippingOption from "../../../features/shipping-label-maker/get-shipping-option";
import Confirm from "../../../features/shipping-label-maker/confirm";
import Header from "../header/header";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default function Wizard(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [wizardContext, setWizardContext] = React.useState(props.wizardContext);
  const { header, steps, onComplete } = props

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSenderStep = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const value = e.target.value;

    setWizardContext({...wizardContext, from:{...wizardContext.from, [id]: value}});
  }

  const handleReceiverStep = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const value = e.target.value;

    setWizardContext({...wizardContext, to:{...wizardContext.to, [id]: value}});
  }

  const handleWeightStep = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const value = e.target.value;
    console.log(id,value);

    setWizardContext({...wizardContext, [id]: value});
  }

  const handleShippingStep = (e) => {
    e.preventDefault();
    const id = e.target.name;
    const value = e.target.value;
    setWizardContext({...wizardContext, shippingOption:value});
  }

  function getStepContent(stepIndex) {
    console.log('get stpe content', stepIndex);
    switch (stepIndex) {
      case 0:
        return <GetSenderAddress wizardContext={wizardContext} onAction={handleSenderStep} />;
      case 1:
        return <GetReceiverAddress wizardContext={wizardContext} onAction={handleReceiverStep}/>;
      case 2:
        return <GetWeight wizardContext={wizardContext} onAction={handleWeightStep}/>;
      case 3:
        return <GetShippingOption wizardContext={wizardContext} onAction={handleShippingStep}/>;
      case 4:
        return <Confirm wizardContext={wizardContext} />
      default:
        return 'Unknown stepIndex';
    }
  }

  function getFinalStep() {
    onComplete(wizardContext);
  }

  return (
    <div className={classes.root}>
      <Header />
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>{getFinalStep()}</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
