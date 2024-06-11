"use client";
import { useState, useEffect, useContext, createContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter, usePathname } from "next/navigation";
import products from "@/app/checkout/components/second/components/cartProducts/cartProducts";
import { Product } from "@/app/product/[id]/interfaces";

interface AuthState {
  user: null | { [key: string]: any };
  token: string;
}
interface CartItem {
  id: string;
  name: string;
  price: string;
  discountedPrice: string;
  imageSrc: string;
  quantity: number;
}

interface ProductCategory {
  parent: string;
  category_level: number;
  category_name: string;
}

interface GlobalContextType {
  screenSize: number;
  auth: AuthState;
  setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
  verifyToken: (token: string) => Promise<boolean>;
  productRating: number;
  setProductRating: (rating: number) => void;
  itemPrice: string | null;
  discountedPrice: string | null;
  setItemPrice: (price: string | null) => void;
  setDiscountedPrice: (price: string | null) => void;
  // selectedProducts: number[];
  // setSelectedProducts: React.Dispatch<React.SetStateAction<number[]>>;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItemQuantity: (itemId: number, quantity: number) => void;
  productCategory: ProductCategory[];
  fetchedProducts: Product[];
  fetchProducts: () => Promise<void>;
}

const defaultContextValue: GlobalContextType = {
  screenSize: 0,
  auth: {
    user: null,
    token: "",
  },
  setAuth: () => { },
  verifyToken: async () => false,
  itemPrice: "0",
  discountedPrice: "0",
  setItemPrice: () => { },
  setDiscountedPrice: () => { },
  // selectedProducts: [],
  // setSelectedProducts: () => {},
  cart: [],
  setCart: () => { },
  addToCart: () => { },
  removeFromCart: () => { },
  updateCartItemQuantity: () => { },
  productRating: 0, // Default value for productRating
  setProductRating: () => { },
  productCategory: [],
  fetchedProducts: [],
  fetchProducts: async () => { },
};

const GlobalContext = createContext<GlobalContextType>(defaultContextValue);

type ContextProviderProps = {
  children: React.ReactNode;
};

function GlobalStateProvider({ children }: ContextProviderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [auth, setAuth] = useState<AuthState>({
    user: null,
    token: "",
  });
  const [authInitialized, setAuthInitialized] = useState<boolean>(false);
  const [productRating, setProductRating] = useState<number>(0);
  const [itemPrice, setItemPrice] = useState<string | null>(null);
  const [discountedPrice, setDiscountedPrice] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [productCategory, setProductCategory] = useState<ProductCategory[]>([]);
  const [fetchedProducts, setFetchedProducts] = useState<Product[]>([]);
  // const getScreenSize = window.innerWidth; // Get the current screen width

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;
  }, [auth.token]);
  // const [auth, setAuth] = useState<AuthState>({
  //     user: null,
  //     token: "",
  // });
  // const [authInitialized, setAuthInitialized] = useState<boolean>(false);

  const [screenSize, setScreenSize] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  async function getProductCategory() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/product-category`
        // `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/product-category?screenSize=${screenSize}`
      );
      if (response.status === 200) {
        console.log("Fetched Categories:", response.data); // Log the fetched data for debugging
        setProductCategory(response.data);
      }
    } catch (error: any) {
      console.error("Error fetching ProductCategory:", error.message);
    }
  }

  async function verifyToken(token: string): Promise<boolean> {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/auth/verify-token`,
        {
          accessToken: token,
        }
      );
      // Check if the response indicates a successful verification
      if (response.data.success) {
        console.log("Token is valid.");
        return true;
      } else {
        // Log and inform the user if the token verification is unsuccessful
        console.log("Token is invalid or expired.");
        toast.error("Please login again");
        return false;
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // Handle errors specific to axios, e.g., network issues, bad requests, etc.
        console.error(
          "Axios error verifying token:",
          error.response?.data.message || error.message
        );
      } else if (error instanceof Error) {
        // Handle generic errors, such as coding errors in try block (less likely)
        console.error("Error verifying token:", error.message);
      } else {
        // If the caught error is not an instance of Error, log a default message
        console.error("Unexpected error verifying token");
      }
      // Notify user of the error via a toast
      toast.error(
        "An error occurred while verifying the token. Please try again."
      );
      return false;
    }
  }

  async function fetchProducts() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/product/get-products`
      );
      if (response.status === 200) {
        setFetchedProducts(response.data);
      }
    } catch (error: any) {
      console.error("Error fetching products:", error.message);
    }
  }

  // useEffect(() => {
  //     const data = localStorage.getItem("auth");
  //     if (data) {
  //         const parsedData = JSON.parse(data);
  //         setAuth({ user: parsedData.user, token: parsedData.token });
  //     }
  //     setAuthInitialized(true);
  // }, []);

  // useEffect(() => {
  //     const handleTokenVerification = async () => {
  //         if (!auth.token) return;
  //         const verified = await verifyToken(auth.token);
  //         if (!verified) {
  //             localStorage.removeItem("auth");
  //             setAuth({ user: null, token: "" });
  //             router.push("/login");
  //         } else if (pathname === "/login") {
  //             router.push("/");
  //         }
  //     };

  //     if (authInitialized && auth.user) {
  //         handleTokenVerification();
  //     } else if (authInitialized && !auth.user) {
  //         router.push("/login");
  //     }
  // }, [auth.user, auth.token, authInitialized, pathname]);

  const addToCart: any = (product: Product) => {
    const {
      uniq_id: id,
      product_name: name,
      retail_price: price,
      discounted_price: discountedPrice,
      images,
    } = product;
    const imageSrc = images.length > 0 ? images[0] : "";
    const quantity = 1;

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === id);

      if (!existingProduct) {
        return [
          ...prevCart,
          { id, name, price, discountedPrice, imageSrc, quantity },
        ];
      }

      return prevCart;
    });
  };
  // useEffect(() => {
  //   if (cart.length === 0) {
  //     products.map((product) => {
  //       addToCart(
  //         product.id,
  //         product.name,
  //         product.price,
  //         product.discountedPrice,
  //         product.imageSrc,
  //         product.quantity
  //       );
  //     });
  //   }
  //   console.log(cart);
  // }, [cart]);
  useEffect(() => {
    getProductCategory();
    fetchProducts();
  }, []);

  const removeFromCart: any = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateCartItemQuantity: any = (itemId: string, quantity: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const value = {
    screenSize,
    auth,
    setAuth,
    verifyToken,
    itemPrice,
    discountedPrice,
    setItemPrice,
    setDiscountedPrice,
    productRating,
    setProductRating,
    cart,
    setCart,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    productCategory,
    fetchedProducts,
    fetchProducts,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
      <ToastContainer />
    </GlobalContext.Provider>
  );
}

const useGlobalState = () => useContext(GlobalContext);

export { useGlobalState, GlobalStateProvider };
