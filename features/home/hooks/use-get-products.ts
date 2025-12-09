"use client";

import { useEffect, useMemo, useState } from "react";

type Product = {
    id: string;
    name: string;
    category: string;
    rating: number;
    price: number;
    image: string;
};

/**
 * Returns a static list of products with a short artificial loading delay.
 * Usage: const { products, isLoading } = useGetProducts();
 */
export const useGetProducts = () => {
    const [isLoading, setIsLoading] = useState(true);

    const products = useMemo<Product[]>(
        () => [
            {
                id: "p1",
                name: "Classic White Shirt",
                category: "Shirts",
                rating: 4.6,
                price: 39.99,
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
            },
            {
                id: "p2",
                name: "Denim Jeans",
                category: "Pants",
                rating: 4.4,
                price: 59.99,
                image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80",
            },
            {
                id: "p3",
                name: "Running Sneakers",
                category: "Shoes",
                rating: 4.7,
                price: 89.99,
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
            },
            {
                id: "p4",
                name: "Oxford Shirt",
                category: "Shirts",
                rating: 4.5,
                price: 44.99,
                image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=400&q=80",
            },
            {
                id: "p5",
                name: "Chino Pants",
                category: "Pants",
                rating: 4.3,
                price: 54.99,
                image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80",
            },
            {
                id: "p6",
                name: "Leather Boots",
                category: "Shoes",
                rating: 4.8,
                price: 129.99,
                image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=400&q=80",
            },
            {
                id: "p7",
                name: "Graphic Tee",
                category: "Shirts",
                rating: 4.2,
                price: 24.99,
                image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
            },
            {
                id: "p8",
                name: "Jogger Pants",
                category: "Pants",
                rating: 4.1,
                price: 49.99,
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
            },
            {
                id: "p9",
                name: "Canvas Slip-Ons",
                category: "Shoes",
                rating: 4.0,
                price: 39.99,
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80",
            },
            {
                id: "p10",
                name: "Linen Shirt",
                category: "Shirts",
                rating: 4.5,
                price: 42.99,
                image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=400&q=80",
            },
        ],
        []
    );

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 400);
        return () => clearTimeout(timer);
    }, []);

    return { products, isLoading };
};

