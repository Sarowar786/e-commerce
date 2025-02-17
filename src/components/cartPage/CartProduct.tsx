"use client";

import { ProductType } from "../../../type";
import Link from "next/link";
import Image from "next/image";
import AddToCartBtn from "../AddToCartBtn";
import PriceFormat from "../products/PriceFormat";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/shofySlice";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";

export default function CartProduct({ product }: { product: ProductType }) {
  const dispatch = useDispatch();

  // Handle remove product action
  const handleRemoveProduct = () => {
    dispatch(removeFromCart(product.id));
    toast.success(`${product.title.substring(0, 20)}... removed successfully`);
  };

  // Ensure product data is valid
  if (!product?.price || product?.quantity == null) {
    return null; // Or render fallback UI
  }

  return (
    <div className="flex py-5 items-center justify-start gap-5">
      {/* Product Image */}
      <Link
        href={`/products/${product?.id}`}
        className="w-48 h-48 bg-cartBg border border-primaryColor rounded-md overflow-hidden flex items-center justify-center group"
      >
        <Image
          src={product?.images[0]}
          alt="product image"
          width={500}
          height={500}
          className="w-full h-full group-hover:scale-110 duration-300 object-contain"
        />
      </Link>

      {/* Product Details */}
      <div className="flex flex-1 ml-4 flex-col justify-between">
        <div className="relative pr-9 sm:grid sm:grid-cols-1 grid-cols-7">
          {/* Product Info */}
          <div className="flex flex-col gap-2 col-span-3">
            <p className="text-md font-bold w-full">{product?.title}</p>
            <p>
              Brand: <span className="font-bold text-sm">{product?.brand}</span>
            </p>
            <p>
              Category:{" "}
              <span className="font-bold text-sm">{product?.category}</span>
            </p>
          </div>

          {/* Price and Add to Cart Button */}
          <div className="flex items-center gap-5">
            <p className="pt-2">
              <PriceFormat
                amount={product?.price * (product?.quantity ?? 1)}
                className=""
              />
            </p>
            <AddToCartBtn product={product} />
          </div>

          {/* Remove Button */}
          <div>
            <button
              onClick={handleRemoveProduct}
              className="absolute right-0 top-0 text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md p-1 hover:text-red-600 duration-300"
            >
              <IoClose />
            </button>
          </div>
        </div>

        {/* Availability and Savings */}
        <div>
          {product?.availabilityStatus && (
            <p className="flex items-center gap-2">
              <FaCheck className="text-green-600" />
              <span>In Stock</span>
            </p>
          )}
          <p className="flex items-center gap-3">
            You are saving{" "}
            <PriceFormat
              amount={
                product?.price *
                (product?.discountPercentage / 100) *
                (product?.quantity ?? 1)
              }
              className="text-green-600"
            />{" "}
            upon purchase
          </p>
        </div>
      </div>
    </div>
  );
}
