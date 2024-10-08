// single product ta quick view korar jonne create korchilam eita .. ei file take kothu cll kora hoy ni .. 
import React from 'react'
import { ProductType, Review } from '../../type';
import { getData } from './fetchData';
import Container from './Container';
import AddToCartBtn from './AddToCartBtn';
import Image from 'next/image';
import PriceFormat from './products/PriceFormat';
import { FaRegEye } from 'react-icons/fa';
import { MdStar } from 'react-icons/md';
import ProductPrice from './products/ProductPrice';
import ProductImages from './products/ProductImages';
import { paymentImage } from '@/assets';

interface Props {
    params: {
      id: string;
    };
    reviews?: Review[]
  }
export default async function SingleProductDetails({ params }: Props) {
    const { id } = params;

  const endpoint = `https://dummyjson.com/products/${id}`;
  const product: ProductType = await getData(endpoint);
  return (
    <Container>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* product image */}
        <ProductImages images={product?.images} />

        {/* product details */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{product?.title}</h2>
          <div className="flex items-center justify-between gap-5">
            <ProductPrice product={product} />
            <div className="flex items-center gap-1">
              <div className="text-base text-lightText flex items-center">
                {Array?.from({ length: 5 })?.map((_, index) => {
                  const filled = index + 1 <= Math.floor(product?.rating);
                  const halfFilled =
                    index + 1 > Math.floor(product?.rating) &&
                    index < Math.ceil(product?.rating);

                  return (
                    <MdStar
                      key={index}
                      className={`${
                        filled
                          ? "text-orange-400"
                          : halfFilled
                          ? "text-orange-200"
                          : " text-black"
                      }`}
                    />
                  );
                })}
              </div>
              <p className="text-base font-semibold">{`(${product?.rating?.toFixed(
                1
              )} reviews)`}</p>
            </div>
          </div>
          <p className="flex items-center">
            <FaRegEye className="mr-1" />{" "}
            <span className="font-semibold mr-1">250+</span> peoples are viewing
            this right now
          </p>
          <p className="flex items-center gap-1">
            You are saving{" "}
            <span className="text-base font-semibold text-green-500">
              <PriceFormat
                amount={product?.discountPercentage / 100}
                className=""
              />
            </span>{" "}
            upon purchase
          </p>
          <div>
            <p className="text-sm tracking-wide">{product?.description}</p>
            <p className="text-base">{product?.warrantyInformation}</p>
          </div>
          <p>
            Brand: <span className="font-medium">{product?.brand}</span>
          </p>
          <p>
            Category:{" "}
            <span className="font-medium capitalize">{product?.category}</span>
          </p>
          <p>
            Tags:{" "}
            {product?.tags?.map((item: string, index: number) => (
              <span key={index} className="font-medium capitalize">
                {item}
                {index < product?.tags?.length - 1 && ", "}
              </span>
            ))}
          </p>
          <AddToCartBtn product={product} className="rounded-md" />
          <div className="bg-cartBg flex flex-col gap-1 items-center justify-center py-5 rounded-md">
            <Image src={paymentImage} alt="payment image" />
            <p className="text-lg font-medium">
              Guaranteed safe & secure checkout
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
