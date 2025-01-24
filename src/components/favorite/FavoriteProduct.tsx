"use client";

import { useDispatch } from "react-redux";
import { ProductType } from "../../../type";
import { removeFromCart } from "../redux/shofySlice";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import PriceFormat from "../products/PriceFormat";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

export default function FavoriteProduct({ product }: { product: ProductType }) {
  const dispatch = useDispatch();
  const handleRemoveProduct = () => {
    dispatch(removeFromCart(product.id));
    toast.success(`${product.title.substring(0, 20)}... removed successfully`);
  };
  return (
    <div className="flex py-5 items-center justify-start gap-5 ">
      <Link
        href={`/products/${product?.id}`}
        className="w-48 h-48 bg-cartBg border border-primaryColor rounded-md overflow-hidden flex items-center justify-center group "
      >
        <Image
          src={product?.images[0]}
          alt="product image"
          width={500}
          height={500}
          className="w-full h-full group-hover:scale-110 duration-300 object-contain"
        />
      </Link>
      {/* ditails */}

      <div className="flex flex-1 ml-4 flex-col justify-between">
        <div className=" relative pr-9 sm:grid sm:grid-cols-1 grid-cols-7 ">
          <div className="flex flex-col gap-2 col-span-3">
            <p className="text-md font-bold w-full">{product?.title}</p>
            <p>
              {" "}
              Brand: <span className="font-bold text-sm">{product?.brand}</span>
            </p>
            <p>
              Category:{" "}
              <span className="font-bold text-sm">{product?.category}</span>
            </p>
          </div>

          <div>
            <button
              onClick={handleRemoveProduct}
              className="absolute right-0 top-0 text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md p-1 hover:text-red-600 duration-300 "
            >
              <IoClose />
            </button>
          </div>
        </div>
        <div>
          {product?.availabilityStatus && (
            <p className="flex items-center gap-2">
              <FaCheck className="text-green-600" />
              <span>In Stock</span>
            </p>
          )}
          <p className="flex items-center gap-3">
            You are saving{" "}
           <span className="text-primaryColor font-semibold">{product.discountPercentage}%</span>
            upon purchase{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
