import React from 'react';
import Wizard from '../../core/components/wizard/wizard'
import Header from "../../core/components/header/header";
import Label from "./label";

const ShippingLabelMaker = (props) => {

  const [isComplete, setIsComplete] = React.useState(false);
  const [data, setData] = React.useState({});
  const [user, setUser] = React.useState({username:'', authenticated: false});

  const createLabel = function (data) {
    setIsComplete(true);
    setData(data);
  }

  // const authenticate = function (user) {
  //   setUser(user);
  // }

  if (isComplete) {
    return (
      <Label data={data}/>
    )
  }

  return (
    <Wizard
      header={Header}
      wizardContext={{
        from: {
          name: "",
          street: "",
          city: "",
          state: "",
          zip: ""
        },
        to: {
          name: "",
          street: "",
          city: "",
          state: "",
          zip: ""
        },
        weight: "",
        shippingOption: 1
      }}
      steps={['Enter the sender\'s address:', 'Enter the receivers\'s address:', 'Enter Weight', 'Choose a Shipping Option', 'Confirm']}
      onComplete={createLabel}
      dbUsers={'../../../../assets/users.json'}
      user={user}
    />
  );
}

export default ShippingLabelMaker;
