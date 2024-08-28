import React from 'react';
import '../TopNavbar/TopNavbar.css';
import Image from '../images/img.png'
import Image1 from '../images/img1.png'
import Image2 from '../images/img2.png'
import Image3 from '../images/img3.png'
import Image4 from '../images/img4.png'
import Image5 from '../images/img5.png'
import Image6 from '../images/img6.png'
import Image7 from '../images/img7.png'
import Image8 from '../images/img8.png'
import Image9 from '../images/img9.png'
function TopNavbar() {
  return (
    <div className="top-navbar">
      <img src={Image} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image1} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image2} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image3} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image4} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image5} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image6} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image7} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image8} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
      <img src={Image9} alt="Logo" className="logo" style={{ height: '30px', width: '30px' }} />
     
    </div>
  );
}

export default TopNavbar;
