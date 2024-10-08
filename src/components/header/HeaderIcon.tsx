'use client'
import Link from "next/link";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { StateType } from "../../../type";

export default function HeaderIcon() {
    const {cart, favourite} = useSelector((state:StateType)=> state?.shofy)
    // console.log(cart);
    
  return (
    <div className="flex  gap-4 items-center">
      {/* favourite */}
      <Link href={'/favourite'} className="relative">
        <CiHeart className="text-white border border-transparent bg-bgicon text-xl h-10 w-10 rounded-full p-1" />
        <span className="bg-white p-[2px] rounded-full absolute -top-1 -right-2 h-[20px] w-[20px] flex items-center justify-center border-primaryColor border-2">
          <span>
            {favourite?.length > 0 ? favourite.length : '0'}
          </span>
        </span>
      </Link>
      {/* cart */}
      <Link href={'/cart'} className="relative">
        <CiShoppingCart className="text-white border border-transparent bg-bgicon text-sm h-10 w-10 rounded-full p-1 relative" />
        <span className="bg-white p-[2px] rounded-full absolute -top-1 -right-2 h-[20px] w-[20px] flex items-center justify-center border-primaryColor border-2">
          <span>
            {cart?.length > 0 ? cart.length : '0'}
          </span>
        </span>
      </Link>
    </div>
  );
}
