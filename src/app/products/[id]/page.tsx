import Container from "@/components/Container";
import { getData } from "@/components/fetchData";
import ProductImages from "@/components/products/ProductImages";
import { ProductType, Review } from "../../../../type";
import ProductPrice from "@/components/products/ProductPrice";
import { MdStar } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import PriceFormat from "@/components/products/PriceFormat";
import AddToCartBtn from "@/components/AddToCartBtn";
import { paymentImage } from "@/assets";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
  reviews?: Review[]
}


export default async function SingleProductPage({ params }: Props) {
  const { id } = params;

  const endpoint = `https://dummyjson.com/products/${id}`;
  const product: ProductType = await getData(endpoint);
  // console.log(product);

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
      {/* review section  */}
      <div className="bg-cartBg gap-5 md:flex  md:col-span-2 p-5">
        {product?.reviews?.map((item) => (
          <div key={item.comment} className="bg-white p-5 border border-black rounded-md">
            <p className="font-bold">{item.comment}</p>
            <p className="font-semibold">{item.reviewerName}</p>
            <p>{item.reviewerEmail}</p>
            {/* rating */}
            <div className="text-base text-lightText flex items-center">
                {Array?.from({ length: 5 })?.map((_, index) => {
                  const filled = index + 1 <= Math.floor(item?.rating);
                  const halfFilled =
                    index + 1 > Math.floor(item?.rating) &&
                    index < Math.ceil(item?.rating);

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
          </div>
        ))}
      </div>
    </Container>
  );
}
