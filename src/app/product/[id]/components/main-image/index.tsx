'use client';
import Image from "next/image";
import { useProductState } from "../../context";


export default function MainImage() {
const {product} = useProductState();

    return (
        <Image src={product?.images[0]} height='100' width='100' alt='product-image' />
    )
};