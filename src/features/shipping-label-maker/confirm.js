import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Confirm(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { from, to } = props.wizardContext;

  function getShippingOption() {
    const { shippingOption } = props.wizardContext;

    if (shippingOption === 1) return "Ground";
    return "Priority";
  }

  function getShippingCost() {
    const { weight, shippingOption } = props.wizardContext;
    const shippingRate = 0.40;
    return (Number(weight) * shippingRate * (shippingOption === "1" ? 1 : 1.5)).toFixed(2);
  }

  return (
    <>
      <Card className={classes.root} variant={"outlined"}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Sender Information
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
        </CardContent>
      </Card>
      <Card className={classes.root} variant={"outlined"}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Receiver Information
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
        </CardContent>
      </Card>
      <Card className={classes.root} variant={"outlined"}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Shipping Information
          </Typography>
          <Typography variant="div" component="p">
            {getShippingOption()}
          </Typography>
          <Typography variant="div" component="p">
            Cost: ${getShippingCost()}
          </Typography>
        </CardContent>
      </Card>

    </>

  );
}
