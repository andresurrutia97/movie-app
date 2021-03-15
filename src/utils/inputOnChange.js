import { checkValidity } from './inputValidation';

export const inputOnChange = (controls, setControls, event, controlName) => {
  const updatedControls = {
    ...controls,
    [controlName]: {
      ...controls[controlName],
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        controls[controlName].validation
      ),
      touched: true,
    },
  };
  setControls(updatedControls);
};
