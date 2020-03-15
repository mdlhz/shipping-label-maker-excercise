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

export default function GetReceiverAddress(props) {
  const classes = useStyles();
  const receiver  = props.wizardContext.to;
  const { onAction, error } = props;

  let errorName = false;
  let errorStreet = false;
  let errorCity = false;
  let errorState = false;
  let errorZip = false;

  if (error) {
    for (let item in receiver) {

      if (receiver[item] === '') {
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
          error={errorStreet}
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
          error={errorCity}
          id="city"
          placeholder="Toronto"
          className={classes.textField}
          value={receiver.city}
          onChange={onAction}
          variant="outlined"
        />
        <TextField
          label="State"
          error={errorState}
          id="state"
          placeholder="Ontario"
          className={classes.textField}
          value={receiver.state}
          onChange={onAction}
          variant="outlined"
        />
        <TextField
          label="Zip"
          error={errorZip}
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
