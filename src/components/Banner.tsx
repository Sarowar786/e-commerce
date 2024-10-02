import React from "react";
import Container from "./Container";
import Image from "next/image";
import { watch } from "@/assets";

export default function Banner() {
  return (
    <div className="bg-bannerBg w-full h-[90%]">
      <Container className="grid grid-cols-1  md:grid-cols-2 gap-10 py-20 ">
        <div className="flex flex-col items-start justify-center pl-20">
          <h1 className="text-red-600">
            Spracial collection
          </h1>
          <p className="text-3xl font-bold ">Get Start </p>
          <p className="text-2xl font-medium tracking-wide">Your favourite shopping </p>
          <button className="w-36 h-10 mt-5 bg-primaryColor text-white capitalize rounded-full ">shop now</button>
        </div>
        <div className="flex items-center justify-center">
          <Image src={watch} alt=" orange " width={400} />
        </div>
      </Container>
    </div>
  );
}
