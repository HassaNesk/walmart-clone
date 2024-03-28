import { Product } from "@/typings/productTypings";

export function groupBySKU(product: Product[]): Record<string, Product[]> {
  return product?.reduce(
    (acc: Record<string, Product[]>, currentProduct: Product) => {
      const sku = currentProduct.meta.sku;
      if (!acc[sku]) {
        acc[sku] = [];
      }
      acc[sku].push(currentProduct);
      return acc;
    },
    {}
  );
}
