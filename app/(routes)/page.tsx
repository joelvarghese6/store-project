import { Billboard } from "@/features/home/components/billboard";
import ProductList from "@/features/home/components/product-list";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-10 pb-10">
      <Billboard />
      <div>
        <ProductList />
      </div>
    </div>
  );
}
