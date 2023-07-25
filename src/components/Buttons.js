import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ style, text, children }) => {
  const deafultStyle = {
    fontWeight: '600',
    fontFamily: "IBM Plex Sans",
    fontSize: "18px",
    cursor: "pointer"
  
  }

  const buttonStyle = { ...deafultStyle , ...style };

  return (
    <button style={buttonStyle} className='flex justify-center items-center '  >
      {children}
      {text}
    </button>
  );
};

Buttons.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};



export default Buttons;
