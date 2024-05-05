"use client";
import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { useGlobalState } from "@/context";
import { Product } from "../interfaces";

interface ContextProviderProps {
    children: React.ReactNode,
    params: { category: string }
};

interface ProductsContextType {
    products: Product[];
    category: string
}

const defaultProduct: Product = {
    uniq_id: '',
    product_rating: '',
    description: '',
    pid: '',
    type: '',
    brand: '',
    retail_price: '',
    is_FK_Advantage_product: false,
    images: [],
    discounted_price: '',
    category: '',
    brand_rating: '',
    subcategory: '',
    product_specifications: [],
    product_name: '',
};

const defaultProductContextValue: ProductsContextType = {
    products: [defaultProduct],
    category: ""
};

const SearchContext = createContext<ProductsContextType>(defaultProductContextValue);

function SearchStateProvider({ children, params }: ContextProviderProps) {
    const { category } = params;
    // const { auth } = useGlobalState()

    const [products, setProducts] = useState<Product[]>([defaultProduct]);

    async function getSearchProducts(uniq_id: string) {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/search/products/${category}`);
            if (response.status === 200) {
                setProducts(response.data);
            }
        } catch (error: any) {
            console.error('Error', error.message);
        }
    }

    useEffect(() => {
        getSearchProducts(category);
    }, [category]);

    const value = { products, category };

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
};

const useSearchState = () => useContext(SearchContext);

export { useSearchState, SearchStateProvider };
