"use client";

import { useMemo } from "react";

type Category = {
  id: string;
  name: string;
};


export const useGetCategories = () => {
  const category = useMemo<Category[]>(
    () => [
      { id: "shirts", name: "Shirts" },
      { id: "shoes", name: "Shoes" },
      { id: "pants", name: "Pants" },
    ],
    []
  );

  return { category };
};

