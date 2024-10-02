import React from "react";
import Container from "./Container";
import Image from "next/image";
// import logo from "../../assets/logo.png";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { logo } from "@/assets";
import SocialLinks from "./SocialLinks";

export default function Footer() {
   const navigation = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/products" },
    { title: "Categories", href: "/categories" },
    { title: "Offers", href: "/offers" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];


  return (
    <div className="bg-lightBg py-16">
      <Container className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div>
          <Link href="/">
            <Image src={logo} className="w-40" alt="logo" />
          </Link>
          <p className="pt-4 tracking-wide text-lg  ">
            We are a team of designers and developers that create high quality
            WordPress
          </p>
          <SocialLinks />
        </div>
        <div>
          <h2 className="font-bold text-xl">My Account</h2>
          <div className="pt-4">
            {navigation?.map((item) => (
              <Link
                href={item?.href}
                key={item.title}
                className="text-gray-700 hover:text-themeColor flex items-center gap-3 py-1 font-semibold  duration-200"
              >
                <GoDotFill size={10} />
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl">Information</h2>
          <div className="pt-4">
            {navigation?.map((item) => (
              <Link
                href={item?.href}
                key={item.title}
                className="text-gray-700 hover:text-themeColor flex items-center gap-3 py-1 font-semibold  duration-200"
              >
                <GoDotFill size={10} />
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl">Talk to us</h2>
          <div className="pt-4">
            <p className="">Got Question? Call us</p>
            <h1 className="text-xl font-bold">+8801234567989</h1>
          </div>
          <div className="pt-4 text-gray-500">
            <p>shofy@support.com</p>
            <p>Dhaka ,Bangladesh</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
