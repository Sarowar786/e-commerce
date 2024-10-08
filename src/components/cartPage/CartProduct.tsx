import React from "react";
import { ProductType } from "../../../type";
import Link from "next/link";
import Image from "next/image";
import AddToCartBtn from "../AddToCartBtn";
import PriceFormat from "../products/PriceFormat";

export default function CartProduct({ product }: { product: ProductType }) {
  return (
    <div className="flex py-5 items-center justify-start gap-5 ">
      <Link
        href={`/products/${product?.id}`}
        className="w-36 h-36 bg-cartBg border border-primaryColor rounded-md overflow-hidden flex items-center justify-center group "
      >
        <Image
          src={product?.images[0]}
          alt="product image"
          width={500}
          height={500}
          className="w-full h-full group-hover:scale-110 duration-300"
        />
      </Link>
      <div>
      <p>{product?.title}</p>
      <p>{product?.brand}</p>
      <p>{product?.category}</p>
      <div className="flex gap-5 items-center justify-center">
        
      </div>
      </div>
    </div>
  );
}
