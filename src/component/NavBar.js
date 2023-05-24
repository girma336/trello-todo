import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { RxDashboard } from 'react-icons/rx';
import { FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './NavBar.css';

const NavBar = ({ bar, setBar }) => {
  const handleClose = () => {
    setBar(!bar);
  };

  return (
    <nav className="nav">
      <div className={`${bar ? 'nav__menu show-menu' : 'nav__menu'}`}>
        <h1 className="name-user">
          {' '}
          <FaUser />
          {' '}
          Girma T.
        </h1>
        <div className="close-bar">
          { bar ? <BsArrowLeftShort onClick={handleClose} /> : <BsArrowRightShort className="show__toggle" onClick={handleClose} /> }
        </div>
        <div className="dashboard">
          <RxDashboard />
          {' '}
          Home
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  bar: PropTypes.bool.isRequired,
  setBar: PropTypes.func.isRequired,
};
export default NavBar;
