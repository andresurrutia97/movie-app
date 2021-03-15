import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Ui/InputContainer';

const UserForm = ({ elements, onChange }) => {
  const form = elements.map((el) => {
    return (
      <Input
        key={el.id}
        title={el.config.elementName}
        elementtype={el.config.elementType}
        elementConfig={el.config.elementConfig}
        value={el.config.value}
        changed={(event) => onChange(event, el.id)}
        shouldValidate={el.config.validation}
        invalid={!el.config.valid}
        touched={el.config.touched}
      />
    );
  });
  return <div className="w-full"> {form}</div>;
};

UserForm.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string,
      elementtype: PropTypes.string,
      elementConfig: PropTypes.array,
      value: PropTypes.string,
      changed: PropTypes.func,
      shouldValidate: PropTypes.bool,
      invalid: PropTypes.bool,
      touched: PropTypes.bool,
    })
  ),
  onChange: PropTypes.func,
};

UserForm.defaultProps = {
  elements: [],
  onChange: () => {},
};

export default UserForm;
