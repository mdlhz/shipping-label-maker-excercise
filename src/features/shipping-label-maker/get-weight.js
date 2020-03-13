import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
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
  const { onAction } = props;

  return (
    <div className={classes.root}>
      <div>
        <TextField
          label="Enter Weight in Kg"
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
