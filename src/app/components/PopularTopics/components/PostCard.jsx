import Image from "next/image";
import Link from "next/link";
import React from "react";
import Category from "./Category";

const PostCard = ({ post,type }) => {
  return (
    <Link href="/" className="group">
    <div className="relative flex flex-col gap-[15px]">
      <div className="relative ">
        <Image className="w-full" src={require(`../../../../assets/${post.image}.png`)} />
        <span className="absolute top-[20px] right-[20px]">
        <Category category={post.category} />
        </span>
      </div>
      <div className={`flex flex-col gap-[15px] ${type === 2 ? "absolute bottom-[42px] px-[20px] md:px-[40px]" : null}`}>
      <small className={`text-[12px] ${type === 2 ? "text-[#E5E5E5]" : "text-[#6C757D]"}`}>{post.date}</small>
      <h4 className={`text-[18px] font-bold leading-[25px] ${type === 2 ? "text-white" : "text-[#495057]"}`}>{post.title}</h4>
      <p className={`${type === 2 ? "text-[#E5E5E5]" : "text-[#6C757D]"} text-[12px] leading-[20px]`}>
        {post.subtitle}
      </p>
      </div>
    </div>
    </Link>
  );
};

export default PostCard;
