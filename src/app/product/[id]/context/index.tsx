"use client";
import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import {
  Product,
  Review,
  RelatedProduct,
  ProductsCollection,
} from "../interfaces";

interface ContextProviderProps {
  children: React.ReactNode;
  params: { id: string };
}

interface ProductContextType {
  product: Product | null;
  review: Review[]; // Assuming review is an array of Review objects
  relatedProducts: RelatedProduct[] | null;
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
  product: null,
  review: [], // Initialize as empty array
  relatedProducts: null,
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
  // const { auth } = useGlobalState()

  const [product, setProduct] = useState<Product>(defaultProduct);
  const [productsCollection, setProductsCollection] =
    useState<ProductsCollection>(defaultProductsCollection);
  const { id } = params;

  const [review, setReview] = useState<Review[]>([]);
  const [relatedProducts, setRelatedProducts] = useState<
    RelatedProduct[] | null
  >(null);
  const [productRating, setProductRating] = useState<number>(0);

  async function getProduct(uniq_id: string) {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/product/get-details/${uniq_id}`
      );
      if (response.status === 200) {
        setProduct(response.data);
      }
    } catch (error: any) {
      console.error("Error fetching product:", error.message);
    }
  }

  async function getReview() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/product-reviews?rating=${productRating}`
      );
      if (response.status === 200) {
        setReview(response.data);
      }
    } catch (error: any) {
      console.error("Error fetching reviews:", error.message);
    }
  }

  async function getRelatedProduct(uniq_id: string) {
    try {
      const relatedProductResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/related-product/${uniq_id}`
      );
      setRelatedProducts(relatedProductResponse.data.relatedProducts);
    } catch (error: any) {
      console.error("Error fetching related products:", error.message);
    }
  }

  useEffect(() => {
    getProduct(id);
    getReview();
    getRelatedProduct(id);
  }, [id]);

  const value = { product, review, relatedProducts };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

const useProductState = () => useContext(ProductContext);

export { useProductState, ProductStateProvider };
