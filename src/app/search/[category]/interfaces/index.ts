export interface ProductSpecification {
    key: string;
    value: string;
}

export interface Product {
    uniq_id: string;
    product_rating: string;
    description: string;
    pid: string;
    type: string;
    brand: string;
    retail_price: string;
    is_FK_Advantage_product: boolean;
    images: string[];
    discounted_price: string;
    category: string;
    brand_rating: string;
    subcategory: string;
    product_specifications: ProductSpecification[];
    product_name: string;
}

export interface Category {
    category_name: string;
    category_level: number;
    children: string[];
    count: number;
    parent: string;
  }