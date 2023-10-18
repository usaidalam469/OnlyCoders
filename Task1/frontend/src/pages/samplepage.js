import Banner from '../components/banner';
import HorizontalNavBar from '../components/horizontalNavBar';
import React, {useState} from 'react';
import NewsFeed from '../components/newsfeed';
import Sidebar from 'react-sidebar';

function Sample() {
    return (
      <>
      <div style={{ backgroundColor : "#f8f8fb"}}>
      <HorizontalNavBar></HorizontalNavBar>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Banner/>
          </div>
        </div>
        <div className='row'> 
            <NewsFeed/>
        </div>
      </div>
      </div>
      </>
    );
  }
  
  export default Sample;
  