import React from "react";
import { shallow } from 'enzyme';
import Wizard from "./wizard";
import Header from "../header/header";
import Button from '@material-ui/core/Button'


describe('the <Wizard /> Component', () => {
  let wrapper;
  const props = {
    header: Header,
    steps: ['Enter the sender\'s address:', 'Enter the receivers\'s address:', 'Enter Weight', 'Choose a Shipping Option', 'Confirm'],
    wizardContext: {},
    onComplete: (wizardContext) => wizardContext,
  };

  it('should render', () => {
    const component = shallow(<Wizard {...props}/>);
    expect(component).toMatchSnapshot()
  });

  it('should handle the onClick event', () => {
    const mockGoNext = jest.fn();
    const mockGoBack = jest.fn();

    const buttonNext = shallow(<Button onClick={mockGoNext}>Next</Button>);
    const buttonBack = shallow(<Button onClick={mockGoBack}>Back</Button>);

    buttonNext.simulate('click');
    expect(mockGoNext).toHaveBeenCalled();

    buttonBack.simulate('click');
    expect(mockGoBack).toHaveBeenCalled();
  });

  it('should exist Button back and next', () => {
    const component = shallow(<Wizard {...props}/>);
    const goBackButton = component.find(Button).at(0);
    expect(goBackButton.exists()).toBe(true);

    const goNextButton = component.find(Button).at(1);
    expect(goNextButton.exists()).toBe(true);

  });
});

