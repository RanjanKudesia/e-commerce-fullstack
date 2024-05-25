import Method from "./components/method";
import ProductSummary from "./components/productSummary";

export default function Second() {
  return (
    <div className="flex flex-col md:flex-row gap-[52px] md:gap-[32px] px-[24px] md:px-[120px] pb-[24px] md:pb-[120px] justify-center ">
      <Method />
      <ProductSummary />
    </div>
  );
}
