import React, { useState } from 'react';
import Dropdown from './Dropdown'; 

const Header = () => {
  const [showDropdown, setshowDropdown] = useState(false);

  const toggleDropdown = () => {
    setshowDropdown(!showDropdown);
  }

  return (
    <div className="header">
      <div className="part">
        part1
      </div>
      <div className="part" onClick={toggleDropdown}>
        part2
        {showDropdown && <Dropdown />}
      </div>
      <div className="part">
        part3
      </div>
    </div>
  );
};

export default Header;