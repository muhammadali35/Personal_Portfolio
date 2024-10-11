import React from 'react';
// import { bannerImg } from "./../../";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[250px] h-[250px] lgl:w-[300px] lgl:h-[300px] z-10 rounded-full  object-cover"
        src={require('./../../assets/images/malii2.png')}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[270px] h-[270px] lgl:w-[320px] lgl:h-[320px] rounded-full border-2 border-[#FF014F]"></div>
    </div>
  );
}

export default RightBanner;
