'use client';
import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Product } from "../interfaces";

interface ContextProviderProps {
    children: React.ReactNode,
    params: { category: string }
};

interface ProductsContextType {
    products: Product[];
    category: string;
    subCategories: string[];
    subCategory: string;
    sortByFilter: string;
    setSortByFilter: (sortByFilter: string) => void;
    setSubCategory: (subCategory: string) => void;
    priceFilter: string;
    setPriceFilter: (priceFilter: string) => void;
    isFilterOpen: boolean;
    setIsFilterOpen: (isFilterOpen: boolean | ((prev: boolean) => boolean)) => void;
};

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
    category: "",
    subCategories: [""],
    subCategory: "",
    setSubCategory: () => { },
    sortByFilter: "Relevent Products",
    setSortByFilter: () => { },
    priceFilter: "",
    setPriceFilter: () => { },
    isFilterOpen: false,
    setIsFilterOpen: () => { },
};

const SearchContext = createContext<ProductsContextType>(defaultProductContextValue);

function SearchStateProvider({ children, params }: ContextProviderProps) {
    const { category } = params;
    const searchParams = useSearchParams();
    const [products, setProducts] = useState<Product[]>([defaultProduct]);
    const [subCategories, setSubCategories] = useState<string[]>([""]);
    const [subCategory, setSubCategory] = useState<string>("");
    const [priceFilter, setPriceFilter] = useState<string>("");
    const [sortByFilter, setSortByFilter] = useState<string>("Relevant products");
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

    async function getSearchProducts(category: string, priceFilter: string) {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/search/products/${category}?branded=${searchParams.has('branded')}&discount=${searchParams.has('discount')}&above4stars=${searchParams.has('above4stars')}&priceFilter=${priceFilter}`, {
                subCategory
            });
            if (response.status === 200) {
                setProducts(response.data);
            }
        } catch (error: any) {
            console.error('Error', error.message);
        }
    }

    useEffect(() => {
        getSearchProducts(category, priceFilter);
    }, [category, searchParams, subCategory, priceFilter]);

    async function getCategories(category: string) {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/search/children-categories/${category}`);
            if (response.status === 200) {
                setSubCategories(response.data.subCategories);
            }
        } catch (error: any) {
            console.error("Error", error.message);
        }
    }

    useEffect(() => {
        if (category) {
            getCategories(category);
        }
    }, [category]);

    const value = { products, category, subCategories, subCategory, setSubCategory, priceFilter, setPriceFilter, sortByFilter, setSortByFilter, isFilterOpen, setIsFilterOpen };

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
}

const useSearchState = () => useContext(SearchContext);

export { useSearchState, SearchStateProvider };
