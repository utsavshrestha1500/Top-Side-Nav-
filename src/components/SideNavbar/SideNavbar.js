import React from 'react';
import '../SideNavbar/SideNavbar.css';
import Image1 from '../images/i1.png'
import Image2 from '../images/i2.png'
import Image3 from '../images/i3.png'
import Image4 from '../images/i4.png'

function SideNavbar() {
  return (
    <div className="side-navbar">
     <img src={Image1} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image1} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image2} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image3} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image4} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image1} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image1} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
     
      
    </div>
  );
}

export default SideNavbar;
