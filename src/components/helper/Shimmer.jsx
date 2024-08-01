import React from 'react';
import HomeShimmer from './HomeShimmer';

const Shimmer = () => {
  return (
    <>
    <HomeShimmer/>
    <div className="shimmer-card-container">
    {Array(10).fill("").map((e,index)=>{return <div className ="shimmer-card" key ={index}>
    </div>})}
    </div>
    </>
  );
};

export default Shimmer;
