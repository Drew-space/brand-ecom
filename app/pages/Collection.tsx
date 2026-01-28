import React from "react";
import ShoppingCard from "./ShoppingCard";
import { products } from "../constants/data";
import { Product } from "@/types/product";

const Collection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-primary">
      <div className="flex justify-between">
        <h2 className="text-sm md:text-2xl font-semibold mb-6">
          Shop Our Collection
        </h2>
        <h3>See All</h3>
      </div>

      <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center ">
        {products.map((product: Product) => (
          <ShoppingCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Collection;
