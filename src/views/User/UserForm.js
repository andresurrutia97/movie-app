export default {
  name: {
    elementType: 'input',
    elementName: 'Name',
    elementConfig: {
      type: 'text',
      placeholder: 'Name',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    fullWidth: false,
  },
  tel: {
    elementType: 'input',
    elementName: 'Phone',
    elementConfig: {
      type: 'number',
      placeholder: 'Phone number',
    },
    value: '',
    validation: {
      required: true,
      isNumeric: true,
    },
    valid: false,
    touched: false,
    fullWidth: false,
  },
  img: {
    elementType: 'input',
    elementName: 'Picture',
    elementConfig: {
      type: 'text',
      placeholder: 'Picture url',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    fullWidth: false,
  },
  desc: {
    elementType: 'textarea',
    elementName: 'Description',
    elementConfig: {
      type: 'text',
      placeholder: 'Description',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    fullWidth: true,
  },
};
