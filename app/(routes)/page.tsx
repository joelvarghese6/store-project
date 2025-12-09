import { Suspense } from "react";
import { Billboard } from "@/features/home/components/billboard";
import Menu from "@/features/home/components/menu";
import ProductList from "@/features/home/components/product-list";

export default function Home() {
  return (
    <div className="space-y-10 pb-10 pt-16">
      <Billboard />
      <section className="p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <h2 className="text-center text-2xl font-bold text-black">
            The Sale Essential
          </h2>
          <Suspense fallback={<div className="h-32" />}>
            <Menu />
          </Suspense>
          <Suspense fallback={
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
          }>
            <ProductList />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
