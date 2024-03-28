"use client";

import { Product } from "@/typings/productTypings";
import { useCartStore } from "../../store";
import { Button } from "./ui/button";
import { log } from "console";
import RemoveFromCart from "./RemoveFromCart";

export default function AddtoCart({ product }: { product: Product }) {
  const [cart, addToCart] = useCartStore((s) => [s.cart, s.addToCart]);

  const howManyInCart = cart.filter(
    (i) => i?.meta.sku === product.meta.sku
  ).length;

  const handelAdd = () => {
    addToCart(product);
  };
  if (howManyInCart > 0) {
    return (
      <div className="flex space-x-5 items-center">
        <RemoveFromCart product={product} />
        <span>{howManyInCart}</span>
        <Button onClick={handelAdd} className="bg-walmart hover:bg-walmart/50">
          +
        </Button>
      </div>
    );
  }
  return <Button onClick={handelAdd}>Add to Cart</Button>;
}
