"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { getData } from "./fetchData";
import { ProductType } from "../../type";
import Link from "next/link";

export default function SearchInput() {
  const [inputvalue, setInputValue] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilterPruducts] = useState([]);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const searchContainerRef = useRef(null)

  useEffect(() => {
    const getProuduct = async () => {
      const endpoint = "https://dummyjson.com/products";
      try {
        const data = await getData(endpoint);
        setProducts(data?.products);
      } catch (error) {
        console.log("error", error);
      }
    };
    getProuduct();
  }, []);

  
  return (
    <div ref={searchContainerRef} className="hidden xl:inline-flex flex-1 h-10 relative">
      <input
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={(e)=> setIsInputFocus(true)}
        value={inputvalue}
        type=" text"
        placeholder=" Search here "
        className="h-full w-full rounded-tl-full rounded-bl-full flex items-center justify-center pl-8 border-none outline-none pr-10"
      />
      <button className="h-10 bg-black text-white px-5 rounded-tr-full rounded rounded-br-full">
        search
      </button>
      <IoIosSearch className="absolute left-2 text-xl top-2.5 font-semibold " />
      {inputvalue && (
        <RxCross1
          onClick={(e) => setInputValue("")}
          className="absolute right-24 top-3"
        />
      )}
      {inputvalue && (
        <div className="absolute top-12 left-3 w-[95%] mx-auto h-auto max-h-96 bg-white rounded-md overflow-y-scroll cursor-pointer text-lg " >
          {filteredProducts?.length > 0 ? <div>
            {filteredProducts?.map((item:ProductType)=>(
            <Link key={item.id} href={`/products/${item?.id}`}
            className="flex items-center gap-1 hover:bg-gray-300"
            onClick={(e) => setInputValue("")}
            >
              <IoIosSearch/> {item?.title}
            </Link>
          ))}
          </div> : <div>
            <p className="p-2">Nothing match with <span className="text-black underline">{inputvalue}</span> , Please try again </p>
            </div>}
        </div>
      )}
    </div>
  );
}
