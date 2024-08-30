import React from 'react';
import '../TopNavbar/TopNavbar.css';
import Image1 from '../images/i1.png'
import Image2 from '../images/i2.png'
import Image3 from '../images/i3.png'
import Image4 from '../images/i4.png'
import Image5 from '../images/i5.png'
import Image6 from '../images/i6.png'
import Image7 from '../images/i7.png'
import Image8 from '../images/i8.png'


function TopNavbar() {
  return (
    <div className="top-navbar">
 
      <img src={Image1} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image2} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image6} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image3} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image4} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image7} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image5} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image4} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image8} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
     
    </div>
  );
}

export default TopNavbar;
