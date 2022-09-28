import React from 'react';
import PropTypes from 'prop-types';
const Header: React.FC<{
  title?: string;
  bgColor?: string;
  textColor?: string;
}> = ({ title, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{title}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: 'Feeback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};
Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
