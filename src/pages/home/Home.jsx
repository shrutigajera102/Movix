import React from 'react';
import '../home/heroBanner/style.scss'
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import "./style.scss";
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';


const Home = () => {
  return (
    <div className='homepage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
      <div style={{height:1000}}></div>
    </div>
  );
};

export default Home