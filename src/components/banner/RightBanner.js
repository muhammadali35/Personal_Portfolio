import React from 'react';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      {/* Image container */}
      <div className="relative z-10 w-[250px] h-[250px] lgl:w-[300px] lgl:h-[300px] rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"  // Ensure object-cover is applied
          src={require('./../../assets/images/MAlipro.png')}
          alt="bannerImg"
        />
      </div>

      {/* Outer circle border */}
      <div className="absolute bottom-0 w-[255px] h-[255px] lgl:w-[303px] lgl:h-[303px] rounded-full border-2 border-[#FF014F]"></div>
    </div>
  );
}

export default RightBanner;
