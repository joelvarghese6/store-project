import { Billboard } from "@/features/home/components/billboard";
import Menu from "@/features/home/components/menu";
import ProductList from "@/features/home/components/product-list";

export default function Home() {
  return (
    <div className="space-y-10 pb-10">
      <Billboard />
      <section className="p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <h2 className="text-center text-2xl font-bold text-black">
            The Sale Essential
          </h2>
          <Menu />
          <ProductList />
        </div>
      </section>
    </div>
  );
}
