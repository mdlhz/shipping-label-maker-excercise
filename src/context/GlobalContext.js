import React from 'react';
import WizardContextProvider from './WizardContextProvider'

const GlobalContext = ({ children }) => {
  return (
    <WizardContextProvider />
  );
};

export default GlobalContext;
