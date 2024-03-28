import Basket from "@/components/Basket";
import { ShoppingCartIcon } from "lucide-react";

export default function BasketPage() {
  return (
    <div className="w-full mx-auto max-w-7xl p-10">
      <div className="flex items-center space-x-2">
        <ShoppingCartIcon className="w-10 h-10" />
        <h1 className="text-3xl font-sans">Your Cart</h1>
      </div>
      <p className="my-2">
        review the item in your cart and checkout when ready !
      </p>

      <Basket />
    </div>
  );
}
