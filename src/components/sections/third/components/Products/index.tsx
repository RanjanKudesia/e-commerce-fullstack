"use client";
// import { useProductState } from "@/app/product/[id]/context";
import { Product } from "@/app/product/[id]/interfaces";
import React, { useEffect, useState } from "react";
import ProductCard from "./Card";
import axios from "axios";
import { useGlobalState } from "@/context";

export default function TProducts() {
  // const { products } = useProductState();
  const { fetchedProducts } = useGlobalState();

  // useEffect(() => {
  //   console.log("fetched products", products);
  // }, [products]);

  // const [fetchedProducts, setFetchedProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/product/get-products`
  //     );
  //     if (response.status === 200) {
  //       setFetchedProducts(response.data);
  //     }
  //   } catch (error: any) {
  //     console.error("Error fetching products:", error.message);
  //   }
  // };

  return (
    <div className="grid grid-cols-2 gap-[17px] gap-y-[24px] md:grid-cols-4 md:gap-[24px] md:gap-y-[32px]">
      {fetchedProducts?.map((product: Product) => (
        <ProductCard
          key={product.uniq_id}
          prodImg={product.images[0]}
          prodName={product.product_name}
          prodPrice={product.discounted_price}
          prodRating={product.product_rating}
          prodLink={product.uniq_id}
          prodRetailPrice={product.retail_price}
        />
      ))}
    </div>
  );
}
