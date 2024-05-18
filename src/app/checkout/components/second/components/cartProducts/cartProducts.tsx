interface Product {
  id: number;
  name: string;
  price: string;
  discountedPrice: string;
  imageSrc: string;
  quantity: number;
}

const products = [
  {
    id: 1,
    name: "Logitech G435 Gaming Headset",
    price: "$280",
    discountedPrice: "$200",
    imageSrc: "/pngs/LOGITECH_HEADPHONES.png",
    quantity: 1,
  },
  {
    id: 2,
    name: "Logitech G502 Hero",
    price: "$380",
    discountedPrice: "$290",
    imageSrc: "/pngs/LOGITECH_GAMING_MOUSE.png",
    quantity: 1,
  },
  {
    id: 3,
    name: "Logitech G303 Shroud Edition",
    price: "$179",
    discountedPrice: "$150",
    imageSrc: "/pngs/LOGITECH_MOUSE.png",
    quantity: 1,
  },
];

export default products;
