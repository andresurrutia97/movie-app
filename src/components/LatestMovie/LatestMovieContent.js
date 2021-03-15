import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => {
  return (
    <div className="absolute flex flex-col justify-center items-center top-0 mt-3 w-full md:w-4/6 md:items-start md:pt-24 md:pl-32 lg:pt-24 lg:pl-40 xl:mt-40 xl:pl-56">
      {children}
    </div>
  );
};

Content.propTypes = {
  children: PropTypes.node,
};

Content.defaultProps = {
  children: null,
};

export default Content;
