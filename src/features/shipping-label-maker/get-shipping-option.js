import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function GetShippingOption(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');
  const { onAction } = props;

  const handleChange = event => {
    setValue(event.target.value);
    onAction(event);
  };

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Shipping option</FormLabel>
        <RadioGroup aria-label="shipping option" name="shippingOption" value={value} onChange={handleChange}>
          <FormControlLabel value="1" control={<Radio />} label="Ground" />
          <FormControlLabel value="2" control={<Radio />} label="Priority" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
