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

export default function GetSenderAddress(props) {
  const classes = useStyles();
  const sender  = props.wizardContext.from;
  const { onAction, error } = props;
  let errorName = false;
  let errorStreet = false;
  let errorCity = false;
  let errorState = false;
  let errorZip = false;

  if (error) {
    for (let item in sender){
      if (sender[item] === '') {
        switch (item) {
          case 'name':
            errorName = true;
            break;
          case 'street':
            errorStreet = true;
            break;
          case 'city':
            errorCity = true;
            break;
          case 'state':
            errorState = true;
            break;
          case 'zip':
            errorZip = true;
            break;
          default:
            break;
        }
      }

    }
  }

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="name"
          error={errorName}
          label="Name"
          required
          style={{ margin: 8 }}
          placeholder="Enter sender's name"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={sender.name}
          onChange={onAction}
          variant="outlined"
        />
        <TextField
          id="street"
          error={errorStreet}
          label="Address"
          style={{ margin: 8 }}
          placeholder="Enter sender's address"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={sender.street}
          onChange={onAction}
          variant="outlined"
        />
        <TextField
          label="City"
          error={errorCity}
          id="city"
          placeholder="Toronto"
          className={classes.textField}
          value={sender.city}
          onChange={onAction}
          variant="outlined"
        />
        <TextField
          label="State"
          error={errorState}
          id="state"
          placeholder="Ontario"
          className={classes.textField}
          value={sender.state}
          onChange={onAction}
          variant="outlined"
        />
        <TextField
          label="Zip"
          error={errorZip}
          id="zip"
          placeholder="M4L3P3"
          className={classes.textField}
          value={sender.zip}
          onChange={onAction}
          variant="outlined"
        />
      </div>
    </div>
  );
}
