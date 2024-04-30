"use client";
import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { useGlobalState } from "@/context";
import { Product } from "../interfaces";

interface ContextProviderProps {
  children: React.ReactNode;
  params: { id: string };
}

const ProductContext = createContext(null);

function ProductStateProvider({ children, params }: ContextProviderProps) {
  console.log(params);
  const id = params.id;

  // const { auth } = useGlobalState()

  // useEffect(() => {
  //     axios.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;
  // }, [auth.token]);

  const [product, setProduct] = useState<Product | null>(null);

  async function getProduct(uniq_id: string) {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/product/get-details/${uniq_id}`
      );
      if (response.status === 200) {
        // console.log(response.data);
        setProduct(response.data);
      }
    } catch (error: any) {
      console.error("Error", error.message);
    }
  }

  useEffect(() => {
    // if (auth) {
    getProduct(id);
    // };
  }, [id]);

  const value = { product };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

const useProductState = () => useContext(ProductContext);

export { useProductState, ProductStateProvider };
