"use client";
import Link from "next/link";
import React from "react";
import { Swiper, useSwiper } from "swiper/react";
import { usePathname, useRouter } from "next/navigation";
import { slideRecoil } from "../atoms/recoil/slideRecoil";
import { useRecoilState } from "recoil";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const slide = useRecoilState(slideRecoil);
  const swiper = useSwiper();

  const returnHome = () => {
    if (pathname == "/") {
      swiper.slideTo(slide[0]);
    } else {
      router.push('/')
      // <a href="http://localhost:3000/"></a>
    }
  };
  return (
    <div className="flex justify-between mt-10 pr-10 pl-10">
      <button className="font-dancingscript text-xl" onClick={returnHome}>
        Natsuki
      </button>
      <div className="flex justify-end space-x-10">
        <Link href={"/branch/about"} className="font-montserrat">
          about
        </Link>
        <Link href={"/branch/work"} className="font-montserrat">
          work
        </Link>
        {/* <Link href={""} className="font-montserrat">
          blog
        </Link> */}
        <button className="font-montserrat">
          blog(coming soon)
        </button>
        <Link href={"/branch/contact"} className="font-montserrat">
          contact
        </Link>
      </div>
    </div>
  );
}
