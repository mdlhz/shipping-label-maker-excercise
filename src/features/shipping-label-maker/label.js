import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    title: {
      fontSize: 14,
    },
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(100),
    },
  },
}));

export default function Label(props) {
  const classes = useStyles();
  const { from, to, weight, shippingOption } = props.data;

  React.useEffect(() => {
    window.print();
  }, []);

  return (
    <div className={classes.root}>
      <Paper variant="outlined"  elevation={3} >
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          From:
        </Typography>
        <Typography variant="div" component="p">
          {from.name}
        </Typography>
        <Typography variant="div" component="p">
          {from.street}
        </Typography>
        <Typography variant="div" component="p">
          {from.city}
        </Typography>
        <Typography variant="div" component="p">
          {from.state}
        </Typography>
        <Typography variant="div" component="p">
          {from.zip}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          To:
        </Typography>
        <Typography variant="div" component="p">
          {to.name}
        </Typography>
        <Typography variant="div" component="p">
          {to.street}
        </Typography>
        <Typography variant="div" component="p">
          {to.city}
        </Typography>
        <Typography variant="div" component="p">
          {to.state}
        </Typography>
        <Typography variant="div" component="p">
          {to.zip}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Shipping:
        </Typography>
        <Typography variant="div" component="p">
          {shippingOption === 1 ? "Ground" : "Priority"}
        </Typography>
        <Typography variant="div" component="p">
          Weight:{weight}Kg
        </Typography>
      </Paper>
    </div>
  );
}
