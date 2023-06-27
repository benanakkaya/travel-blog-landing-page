import React from "react";
import Category from "../../PopularTopics/components/Category";

const ImageTitle = () => {
  return (
    <div className="flex flex-col gap-[15px] text-white absolute top-[283px] ">
      <div className="px-[10px] text-[10px] font-bold">
      <Category category={"ADVENTURE"} />
      </div>
      <h2 className="flex flex-col flex-shrink-0 text-[36px] font-bold max-w-[530px]">
        Richird Norton photorealistic rendering as real photos
      </h2>
      <div className="flex gap-[10px] items-start text-[12px]">
        <div className="flex items-center gap-[10px]">
          <span>27.06.2023</span>
          <span className="w-[30px] h-[1px] bg-white" />
        </div>
        <p className="w-full leading-[20px] flex flex-col flex-shrink-0 max-w-[420px]">
          Progressively incentivize cooperative systems through technically
          sound functionalities. The credibly productivate seamless data.
        </p>
      </div>
    </div>
  );
};

export default ImageTitle;
