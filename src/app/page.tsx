import Banner from "@/components/Banner";
import { getData } from "@/components/fetchData";
import ProductList from "@/components/products/ProductList";


export default async function Home() {
  const endpoint = 'https://dummyjson.com/products'
  const {products} = await getData(endpoint)
  // console.log(products)
  return (
    <main>
      <Banner/>
      <ProductList products={products} />
    </main>
  );
}
