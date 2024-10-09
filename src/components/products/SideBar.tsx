'use client'
import { FiShoppingCart } from "react-icons/fi";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import QuiceView from "../QuiceView";
import { useDispatch, useSelector } from "react-redux";
import { ProductType, StateType } from "../../../type";
import { useEffect, useState } from "react";
import { addTofavorite } from "../redux/shofySlice";
import toast from "react-hot-toast";

export default function SideBar({product}: {product:ProductType}) {
  const dispatch = useDispatch();
  const { favorite } = useSelector((state: StateType) => state?.shofy);
  const [existingProduct, setExistingProduct] = useState<ProductType | null >(null)
  useEffect(()=>{
    const availableProduct =  favorite?.find((item)=> item?.id === product?.id)
    if(availableProduct){
      setExistingProduct(availableProduct)
    }
    else{
      // sir ai code ta add kore solve korchilo .
    setExistingProduct(null)   
    }
  },[favorite, product, dispatch,existingProduct])

  const handlefavorite =()=>{
    dispatch(addTofavorite(product))
    if(existingProduct){
      toast.success('Remove to favorite successfully!')
    }else{
      toast.success('Added to favorite successfully!')

    }
  }
  return (
    <div className="absolute  top-20 left-3 flex flex-col gap-1 transform -translate-x-20 group-hover:translate-x-0 duration-300 z-40">
      <div className="tooltip tooltip-right" data-tip="Add to cart">
        <button className=" p-2 bg-white rounded-full hover:bg-primaryColor hover:text-white duration-300 ">
          <FiShoppingCart />
        </button>
      </div>
      <QuiceView/>
      <div className="tooltip tooltip-right" data-tip="favorite">
        <button onClick={handlefavorite} className="p-2 bg-white rounded-full hover:bg-primaryColor hover:text-white duration-300 ">
          {existingProduct? (<MdFavorite className="text-primaryColor" />): (<MdFavoriteBorder />)}
        </button>
      </div>
    </div>
  );
}
