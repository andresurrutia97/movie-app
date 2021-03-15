import React from 'react';
import PropTypes from 'prop-types';

const InputContainer = (props) => {
  const {
    elementType,
    title,
    value,
    changed,
    elementConfig,
    invalid,
    shouldValidate,
    touched,
  } = props;

  let inputElement = null;

  let classes =
    'box-border bg-black appearance-none rounded border border-2 custom-blue-border w-full py-3 px-4 text-white mb-3 leading-tight focus:outline-none';

  if (invalid && shouldValidate && touched) {
    classes = `${classes} border border-red-600`;
  }

  switch (elementType) {
    case 'textarea':
      inputElement = (
        <textarea
          {...props.elementConfig}
          className={classes}
          value={value}
          onChange={changed}
          style={{ resize: 'vertical' }}
        />
      );
      break;
    default:
      inputElement = (
        <input
          {...elementConfig}
          className={classes}
          value={value}
          onChange={changed}
        />
      );
  }

  return (
    <div className="mb-1">
      <div className="text-white mb-2">{title}</div>
      {inputElement}
    </div>
  );
};

InputContainer.propTypes = {
  elementType: PropTypes.oneOf(['textarea']),
  value: PropTypes.string.isRequired,
  title: PropTypes.string,
  changed: PropTypes.func.isRequired,
  elementConfig: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired,
  shouldValidate: PropTypes.object,
  touched: PropTypes.bool.isRequired,
};

InputContainer.defaultProps = {
  elementType: null,
  shouldValidate: false,
  title: '',
};

export default InputContainer;
