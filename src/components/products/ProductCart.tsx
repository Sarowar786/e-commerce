import Image from "next/image";
import Link from "next/link";
import { ProductType } from "../../../type";
import SideBar from "./SideBar";
import ProductPrice from "./ProductPrice";

// productList ar product take akhane recieve korbo
export default function ProductCart({ product }: { product: ProductType }) {
  return (
    <div>
      <div className="bg-cartBg h-72 rounded-xl relative group overflow-hidden  ">
        {/* image */}
        <Link href={"/product"}>
          <Image
            src={product?.images[0]}
            alt="product image "
            width={500}
            height={500}
            className="h-full w-full object-contain hover:scale-110 duration-300"
          />
          <p className="absolute top-2 right-3 bg-orange-400 rounded-full text-[12px] px-1">
            {" "}
            {product?.discountPercentage}%{" "}
          </p>
        </Link>

        {/* sidebar */}
        <SideBar />
      </div>
        {/* description */}
        <div className="mt-2">
          <div>
            <p className="capitalize  ">{product?.category} </p>
            <h2 className="text-xl font-medium">{product?.title} </h2>
            <h3>
              <ProductPrice product={product} />
            </h3>
          </div>
        </div>

        {/* add to cart button  */}
    </div>

  );
}
