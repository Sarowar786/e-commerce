"use client";
import React, { useEffect, useState } from "react";
import { ProductType, StateType } from "../../type";
import { twMerge } from "tailwind-merge";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity, increaseQuantity } from "./redux/shofySlice";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
interface Props {
  product: ProductType;
  className?: string;
}

export default function AddToCartBtn({ product, className }: Props) {
  
  const { cart } = useSelector((state: StateType) => state?.shofy);
  const dispatch = useDispatch();
  const handleAddtoCart = () => {
    // console.log(product);
    // jodi product thake tahole dispatch kore product ta add to cart a pathay dibo
    if (product) {
      dispatch(addToCart(product));
      toast.success(`${product?.title.substring(0, 10)}... added successfully`);
    }
  };

  const [existingProduct, setExistingProduct] = useState<ProductType | null >(null)
  useEffect(()=>{
    const availableProduct =  cart?.find((item)=> item?.id === product?.id)
    if(availableProduct){
      setExistingProduct(availableProduct)
    }
  },[cart, product])
  return (
    <div>
      {existingProduct? <div className="flex self-start items-center gap-5 mt-3">
        <button onClick={()=>{
          dispatch(decreaseQuantity(product?.id), toast.success('product decrease successfully'))
        }}
        disabled={existingProduct?.quantity! <= 1}
        className="bg-cartBg border border-black p-2 rounded-full hover:border-bgicon duration-300 disabled:bg-white disabled:text-gray-200 ">
          <FaMinus />
        </button>
        <p className="text-base font-semibold w-10 text-center"> {existingProduct?.quantity} </p>
        <button onClick={()=>{
          dispatch(increaseQuantity(product?.id), toast.success('product increase successfully'))
        }} className="bg-cartBg border border-black p-2 rounded-full hover:border-bgicon duration-300 disabled:bg-white disabled:text-gray-200 ">
          <FaPlus/>
        </button>
      </div> : 
          <button onClick={handleAddtoCart} className={twMerge('mt-2 border border-primaryColor w-full capitalize hover:bg-primaryColor hover:text-white duration-300 text-lg' ,className)}>
          add to cart
        </button>
      }


      
    </div>
  );
}
