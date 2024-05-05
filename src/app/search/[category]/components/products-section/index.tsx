'use client';
import { useSearchState } from "../../context";
import ProductCard from "./components/product-card";

export default function Products() {
    const { products } = useSearchState();
    console.log(products);

    return (
        <div className="grid grid-cols-3 gap-x-6 gap-y-6">
            {products.length > 1 && (products.map((product, index) => {
                return (
                    <ProductCard key={index} product={product} />
                )
            }))}
        </div>
    );
}
