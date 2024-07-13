import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className=" p-[18px] absolute w-full bottom-0 footer flex px-[100px]">
      <button className="border border-solid border-[#4F8BFF] bg-[#669AFF] text-white px-5 py-2 ">
        Explore Similar Ads
      </button>
      <div className=" text-[#454545]   align-center shareDiv flex">
        <Image
          src="/icons/shareD.png"
          className=""
          width={20}
          height={15}
          alt="Carry UP"
          priority={true}
        />
        <span className="pl-2 font-semibold text-[18px]">Share</span>
      </div>
    </div>
  );
}

export default Footer;
