import Image from "next/image";
import React from "react";
import ImageTitle from "./components/ImageTitle";

const Hero = () => {
  return (
    <div className="relative w-full max-h-[550px] overflow-hidden">
      <Image className="w-full h-[550px] top-0 left-0 object-cover" src={require('../../../assets/hero-1.png')} />
      <div className="container px-[15px] sm:px-[25px] md:px-[40px] lg:px-[55px] xl:px-[70px] py-[15px] lg:py-[30px]">
        <ImageTitle />
      </div>
    </div>
  );
};

export default Hero;
