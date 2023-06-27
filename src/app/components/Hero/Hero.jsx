import Image from "next/image";
import React from "react";
import ImageTitle from "./components/ImageTitle";

const Hero = () => {
  return (
    <div className="relative w-full max-h-[550px] ">
      <Image className="w-full max-h-[550px] top-0 left-0 object-cover" src={require('../../../assets/hero-1.png')} />
      <div className="container px-[70px] py-[29px]">
        <ImageTitle />
      </div>
    </div>
  );
};

export default Hero;
