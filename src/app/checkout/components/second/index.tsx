import CartProducts from "./components/cartProducts";
import ProductSummary from "./components/productSummary";

export default function Second() {
  return (
    <div className="flex flex-row gap-[32px] px-[120px] pb-[120px] justify-center ">
      <CartProducts />

      <ProductSummary />
    </div>
  );
}
