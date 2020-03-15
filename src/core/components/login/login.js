import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Icon from "@material-ui/core/Icon";
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {AccountBox} from "@material-ui/icons";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: 200,
  },
}));

const Login = ({...props}) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    username: '',
  });
  const { onLogin } = props

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };


  function handleSubmit() {
    onLogin(values)
  }

  return (
    <div className={classes.root}>
      <div>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Username</InputLabel>
          <FilledInput
            id="username"
            onChange={handleChange('username')}
            endAdornment={
              <InputAdornment position="end">
                <Icon>
                  <AccountBox />
                </Icon>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Login;
