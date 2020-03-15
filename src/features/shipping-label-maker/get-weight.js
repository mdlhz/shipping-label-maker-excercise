import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function GetWeight(props) {
  const classes = useStyles();
  const { weight }  = props.wizardContext;
  const { onAction, error } = props;
  console.log('get weight is error', error);
  let errorWeight = error ? true : false;

  return (
    <div className={classes.root}>
      <div>
        <TextField
          label="Enter Weight in Kg"
          error={errorWeight}
          id="weight"
          placeholder="3"
          className={classes.textField}
          value={weight.weight}
          onChange={onAction}
          variant="outlined"
        />
      </div>
    </div>
  );
}
