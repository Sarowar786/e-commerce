"use client";
import Container from "../Container";
import ProductCart from "./ProductCart";
import { ProductType } from "../../../type";

interface Props {
  products: ProductType[];
}

// products take chatch korbo
const ProductList = ({ products }: Props) => {
  return (
    <Container>
      <p className="my-5 text-4xl">Featured Products </p>
      {/* products take map korbo  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {products?.map((item) => (
          // je item gula pabo oi gulake abr product akare product cart a pathay dibo
          <ProductCart key={item.id} product={item} />
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
