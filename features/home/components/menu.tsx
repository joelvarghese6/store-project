"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetCategories } from "../hooks/use-get-categories";

export const Menu = () => {
  const { category } = useGetCategories();
  const noop = () => {};

  return (
    <div className="flex w-full flex-col gap-4 rounded-xl bg-white/60 p-4 shadow-sm ring-1 ring-neutral-200/80 backdrop-blur-sm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[2fr_1fr] sm:items-center">
        <div className="space-y-1">
          <label className="text-xs font-medium text-neutral-500">Search</label>
          <Input
            type="search"
            placeholder="Search products"
            onChange={noop}
            className="bg-white"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-neutral-500">Sort</label>
          <Select defaultValue="" onValueChange={noop}>
            <SelectTrigger className="min-w-[200px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Price: Low to high</SelectItem>
              <SelectItem value="price-desc">Price: High to low</SelectItem>
              <SelectItem value="rating-desc">Rating: High to low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-700">
        <span className="text-xs font-medium uppercase tracking-wide text-neutral-500">
          Categories
        </span>
        {category.map((item) => (
          <Button
            key={item.id}
            type="button"
            variant="outline"
            size="sm"
            onClick={noop}
            className="rounded-full bg-white px-4"
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Menu;

