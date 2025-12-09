
"use client";

import { useGetProducts } from "../hooks/use-get-products";
import { ProductListItem } from "./product-list-item";

export const ProductList = () => {
  const { products, isLoading } = useGetProducts();

  if (isLoading) {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="h-full rounded-lg border border-dashed border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-500"
            >
              Loading products...
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

