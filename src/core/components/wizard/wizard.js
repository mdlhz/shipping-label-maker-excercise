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
import Login from "../login/login";
import hocComponent from "../../../with-authentication";

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
  buttonContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

const Wizard = ({...props}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [wizardContext, setWizardContext] = React.useState(props.wizardContext);
  const [user, setUser] = React.useState(props.user);
  const [error, setError] = React.useState(false);
  const { header, steps, onComplete, data } = props

  function validateForm() {
    switch (activeStep) {
      case 0:
        const { from } = wizardContext;
        return from.name !== '' && from.street !== '' && from.city !== '' && from.state !== '' && from.zip !== '';
      case 1:
        const { to } = wizardContext;
        return to.name !== '' && to.street !== '' && to.city !== '' && to.state !== '' && to.zip !== '';
      case 2:
        const { weight } = wizardContext
        console.log('case 2 nan', isNaN(weight));
        return weight !== '' && !isNaN(weight);
      case 3:
      case 4:
        return true;
      default:
        return undefined;
    }
  }

  const handleNext = () => {
    const isValid = validateForm();
    console.log('handle next is valid?', isValid);
    if (isValid) {
      setError(false);
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
    setError(true)
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
    if (!isNaN(value) && value !== '') setError(false);
    else setError(true);
    setWizardContext({...wizardContext, [id]: value});
  }

  const handleShippingStep = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setWizardContext({...wizardContext, shippingOption:value});
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <GetSenderAddress wizardContext={wizardContext} error={error} onAction={handleSenderStep} />;
      case 1:
        return <GetReceiverAddress wizardContext={wizardContext} error={error} onAction={handleReceiverStep}/>;
      case 2:
        return <GetWeight wizardContext={wizardContext} error={error} onAction={handleWeightStep}/>;
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

  function onSubmitLogin(values) {
    setUser({...user, username: values.username, authenticated: data.authenticated});
  }

  if (user.authenticated) {
    return (
      <div className={classes.root}>
        <Header />{header}
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
              <div>
                {getStepContent(activeStep)}
              </div>
              <div className={classes.buttonContent}>
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

  return (
    <Login onLogin={onSubmitLogin}  />
  );


}

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default  hocComponent(Wizard);
