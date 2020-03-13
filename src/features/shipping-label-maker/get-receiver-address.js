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

export default function GetReceiverAddress(props) {
  const classes = useStyles();
  const receiver  = props.wizardContext;
  const { onAction } = props;

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="name"
          label="Name"
          style={{ margin: 8 }}
          placeholder="Enter receiver's name"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={receiver.name}
          onChange={onAction}
          variant="outlined"
        />
        <TextField
          id="street"
          label="Address"
          style={{ margin: 8 }}
          placeholder="Enter receiver's address"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={receiver.street}
          onChange={onAction}
          variant="outlined"
        />
        <TextField
          label="City"
          id="city"
          placeholder="Toronto"
          className={classes.textField}
          value={receiver.city}
          onChange={onAction}
          variant="outlined"
        />
        <TextField
          label="State"
          id="state"
          placeholder="Ontario"
          className={classes.textField}
          value={receiver.state}
          onChange={onAction}
          variant="outlined"
        />
        <TextField
          label="Zip"
          id="zip"
          placeholder="M4L3P3"
          className={classes.textField}
          value={receiver.zip}
          onChange={onAction}
          variant="outlined"
        />
      </div>
    </div>
  );
}
