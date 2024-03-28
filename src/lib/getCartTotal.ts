import { Product } from "@/typings/productTypings";

export function getCartTotal(product: Product[]): string {
  const total = product.reduce((acc: number, product: Product) => {
    return acc + product?.price;
  }, 0);
  if (!product[0]?.currency) return "$0.00";
  return `${product[0]?.currency} ${total.toFixed(2)}`;
}
