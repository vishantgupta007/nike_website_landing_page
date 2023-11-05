import { products } from "../constants";

import PopularProductsCard from "../components/PopularProductsCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl font-semibold">
          Our <span className="text-coral-red font-bold">Popular</span> Products
        </h1>
        <p className="text-slate-500 lg:max-w-lg mt-2 font-palanquin ">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design and value
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-20 sm:gap-5 gap-14">
        {products.map((product) => (
          <PopularProductsCard {...product} key={product.name} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
