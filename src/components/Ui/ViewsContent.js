import React from 'react';
import PropTypes from 'prop-types';

const ViewsContent = ({ children }) => {
  return (
    <div className="pt-16 my-4 mx-5 md:w-6/12 md:mx-auto md:mt-16">
      {children}
    </div>
  );
};

ViewsContent.propTypes = {
  children: PropTypes.node,
};

ViewsContent.defaultProps = {
  children: null,
};

export default ViewsContent;
