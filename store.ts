import { Product } from "@/typings/productTypings";
import { create } from "zustand";
import { persist } from "zustand/middleware";
// import type {} from '@redux-devtools/extension' // required for devtools typing

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        set((state) => ({ cart: [...state.cart, product] }));
      },
      removeFromCart: (product) => {
        const productToRemove = get().cart.findIndex(
          (p) => p?.meta.sku === product.meta.sku
        );
        set((s) => {
          const newCart = [...s.cart];
          newCart.splice(productToRemove, 1);
          return { cart: newCart };
        });
      },
    }),
    {
      name: "shoping-cart-storage",
    }
  )
);
