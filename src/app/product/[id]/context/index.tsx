"use client";
import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { useGlobalState } from "@/context";
import { Product, ProductsCollection } from "../interfaces";

interface ContextProviderProps {
  children: React.ReactNode;
  params: { id: string };
}

interface ProductContextType {
  product: Product;
}

const defaultProduct: Product = {
  uniq_id: "",
  product_rating: "",
  description: "",
  pid: "",
  type: "",
  brand: "",
  retail_price: "",
  is_FK_Advantage_product: false,
  images: [],
  discounted_price: "",
  category: "",
  brand_rating: "",
  subcategory: "",
  product_specifications: [],
  product_name: "",
};

const defaultProductContextValue: ProductContextType = {
  product: defaultProduct,
};
const defaultProductsCollection: ProductsCollection = {
  products: [],
};

const ProductContext = createContext<ProductContextType>(
  defaultProductContextValue
);

// const ProductContext = createContext<ProductsCollection>(
//   defaultProductsCollection
// );

function ProductStateProvider({ children, params }: ContextProviderProps) {
  const id = params.id;
  // const { auth } = useGlobalState()

  const [product, setProduct] = useState<Product>(defaultProduct);
  const [productsCollection, setProductsCollection] =
    useState<ProductsCollection>(defaultProductsCollection);

  async function getProduct(uniq_id: string) {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/product/get-details/${uniq_id}`
      );
      if (response.status === 200) {
        setProduct(response.data);
      }
    } catch (error: any) {
      console.error("Error", error.message);
    }
  }

  async function getProducts() {
    console.log(process.env.NEXT_PUBLIC_SERVER_API);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/product/get-products`
      );
      if (response.status === 200) {
        setProductsCollection({ products: response.data });
      }
    } catch (error: any) {
      console.error("Error", error.message);
    }
  }

  useEffect(() => {
    getProduct(id);
    getProducts();
  }, []);

  const value = { product };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

const useProductState = () => useContext(ProductContext);

export { useProductState, ProductStateProvider };
