import React from 'react';
import bannerImage from '../assets/images/banner.jpeg'; // Import the image

import '../assets/css/banner.css';

function Banner() {
  const bannerStyle = {
    backgroundImage: `url(${bannerImage})`, // Use the imported image
    backgroundSize: 'cover',
    height: '150px',
    backgroundColor: 'black',
  };

  return (
    <div className="banner" style={bannerStyle}>
      <div className='row'>
      <div className='col-2'></div>
       <div className='col-8' style={{fontWeight : "bold" , fontSize : "40px", color: "white" , justifyContent: "center", marginTop: "50px"}}> NewsFeed</div>
       <div className='col-2'></div>
       </div>
    </div>
  );
}

export default Banner;
