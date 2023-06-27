import Link from "next/link";
import React from "react";
import {
    BsFacebook,
    BsTwitter,
    BsYoutube,
    BsPinterest,
    BsInstagram
  } from "react-icons/bs";

const FooterTop = () => {

    const contactList = {
        title: "Contact the Publisher",
        items: [
            {
                id:1,
                name: "mike@runo.com"
            },
            {
                id:2,
                name: "+944 450 904 505"
            }
        ]
    }

    const explorateList = {
        title: "Explorate",
        items: [
            {id:1, name: "About"},
            {id:2, name: "Partners"},
            {id:3, name: "Job Opportunities"},
            {id:4, name: "Advertise"},
            {id:5, name: "Membership"},
        ]
    }
    
    const headquarterList = {
        title: "Headquarter",
        items : [
            {
                id:1, name: "191 Middleville Road, NY 1001, Sydney - Australia"
            }
        ]
    }

    const connectionList = {
        title: "Connections",
        items : [
            {
                id: 1,
                name: <BsFacebook />,
              },
              {
                id: 2,
                name: <BsTwitter />,
              },
              {
                id: 3,
                name: <BsYoutube />,
              },
              {
                id: 4,
                name: <BsPinterest />,
              },
              {
                id: 5,
                name: <BsInstagram />,
              },
        ]
    }

  return (
    <div className="bg-[#212529]">
      <div className="container px-[15px] sm:px-[25px] md:px-[40px] lg:px-[55px] xl:px-[70px] py-[53px] lg:py-[106px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[60px] lg:gap-[120px] ">
        
        <div className="flex flex-col items-center md:items-start text-center gap-[16px]">
            <h5 className="text-white text-[18px] font-bold leading-[25px]">{contactList.title}</h5>
            <ul className="flex flex-col gap-[18px]">
                {contactList.items.map(item => (
                <li className="text-[#E5E5E5] text-[12px]" key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
        <div className="flex flex-col  items-center md:items-start text-center  gap-[16px]">
            <h5 className="text-white text-[18px] font-bold leading-[25px] ">{explorateList.title}</h5>
            <ul className="flex flex-col gap-[18px]">
                {explorateList.items.map(item => (
                <li className="text-[#E5E5E5] text-[12px] hover:text-[#D4A373]" key={item.id}><Link href="/">{item.name}</Link></li>
                ))}
            </ul>
        </div>
        <div className="flex flex-col  items-center md:items-start text-center  gap-[16px]">
            <h5 className="text-white text-[18px] font-bold leading-[25px] ">{headquarterList.title}</h5>
                {headquarterList.items.map(item => (
                <p className="text-[#E5E5E5] text-[12px]" key={item.id}>{item.name}</p>
                ))}

        </div>
        <div className="flex flex-col  items-center md:items-start text-center  gap-[16px]">
            <h5 className="text-white text-[18px] font-bold leading-[25px]">{connectionList.title}</h5>
            <ul className="flex gap-[18px]">
                {connectionList.items.map(item => (
                <li className="text-[#E5E5E5] text-[12px] hover:text-[#D4A373]" key={item.id}><Link href="/">{item.name}</Link></li>
                ))}
            </ul>
        </div>

      </div>
    </div>
  );
};

export default FooterTop;
