import React from "react";
import Image from "next/image";
import Typewrite from "../molecules/Typewrite";
import girlPic from "../../public/108.svg";
import ArrowDownIcon from "../atoms/ArrowDownIcon";
import Header from "../organisms/Header";

export default function Index() {
  return (
    <div>
      <Header/>
      <div className="flex justify-between items-center my-32 mx-60">
        <Typewrite />
        <Image
          className=""
          src={girlPic}
          alt="picture of a girl"
          width={450}
          height={450}
        />
      </div>
      <ArrowDownIcon />
    </div>
  );
}
