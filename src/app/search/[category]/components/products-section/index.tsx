'use client';
import { useState, useEffect } from 'react';
import { useSearchState } from "../../context";
import ProductCard from "./components/product-card";
import { Product } from "../../interfaces";

export default function ProductsSection() {
    const { products, sortByFilter } = useSearchState();
    const [sortedProducts, setSortedProducts] = useState(products);

    const sortProducts = (products: Product[], sortByFilter: string) => {
        switch (sortByFilter) {
            case 'Price: Low to High':
                return [...products].sort((a, b) => parseFloat(a.retail_price) - parseFloat(b.retail_price));
            case 'Price: High to Low':
                return [...products].sort((a, b) => parseFloat(b.retail_price) - parseFloat(a.retail_price));
            case 'Rating':
                return [...products].sort((a, b) => parseFloat(b.product_rating) - parseFloat(a.product_rating));
            default:
                return products;
        }
    };

    useEffect(() => {
        const sorted = sortProducts(products, sortByFilter);
        console.log(sorted);
        setSortedProducts(sorted);
    }, [products, sortByFilter]);

    return (
        <div className="w-full grid grid-cols-2 xl:grid-cols-3 gap-x-2 gap-y-2 md:gap-x-6 md:gap-y-6">
            {sortedProducts.length > 0 ? (
                sortedProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))
            ) : (
                <p>No products found for the selected filters.</p>
            )}
        </div>
    );
}
