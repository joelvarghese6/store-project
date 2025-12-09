
"use client";

import { useQueryState } from "nuqs";
import { useGetProducts } from "../hooks/use-get-products";
import { ProductListItem } from "./product-list-item";

export const ProductList = () => {
  const [search] = useQueryState('search');
  const [sort] = useQueryState('sort', { defaultValue: 'rating-desc' });
  const [category] = useQueryState('category');

  const { products, isLoading } = useGetProducts({
    search,
    sort,
    category,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="h-full rounded-lg border border-dashed border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-500"
          >
            Loading products...
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-center text-base text-neutral-600">
          No results to show
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

