import { Product } from "@/typings/productTypings";
import { useCartStore } from "../../store";
import { Button } from "./ui/button";

export default function RemoveFromCart({ product }: { product: Product }) {
  const removeFromCart = useCartStore((s) => s.removeFromCart);

  const handelDelete = () => {
    removeFromCart(product);
  };
  return (
    <Button className="bg-walmart hover:bg-walmart/50" onClick={handelDelete}>
      -
    </Button>
  );
}
