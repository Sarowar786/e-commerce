"use client";
import React, { useEffect, useState } from "react";
import { ProductType, StateType } from "../../../type";
import PriceFormat from "./PriceFormat";
import { useSelector } from "react-redux";

export default function ProductPrice({ product }: { product: ProductType }) {
  const regularPrice = product?.price;
  const discountedPrice = product?.price + product?.discountPercentage / 100;

  const { cart } = useSelector((state: StateType) => state?.shofy);
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(
    null
  );
  useEffect(() => {
    const availableProduct = cart?.find((item) => item?.id === product?.id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [cart, product]);
  return (
    <div className="flex gap-4">
      <PriceFormat amount={existingProduct? discountedPrice * existingProduct?.quantity! : discountedPrice } className="font-semibold text-green-500" />
      <PriceFormat
        amount={existingProduct? regularPrice * existingProduct?.quantity! : regularPrice }
        className="text-gray-500 line-through font-normal"
      />
    </div>
  );
}
