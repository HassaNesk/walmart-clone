"use client";

import { getCartTotal } from "@/lib/getCartTotal";
import { useCartStore } from "../../store";
import { groupBySKU } from "./groupBySku";
import Image from "next/image";
import AddtoCart from "./AddtoCart";
import { Button } from "./ui/button";

export default function Basket() {
  const cart = useCartStore((s) => s.cart);
  const grouped = groupBySKU(cart);

  const basketTotal = getCartTotal(cart);
  return (
    <div className="mx-auto max-w-7xl">
      <ul className="space-y-5 divide-y-2">
        {Object.keys(grouped).map((sku) => {
          const item = grouped[sku][0];

          const total = getCartTotal(grouped[sku]);
          return (
            <li
              key={sku}
              className="p-5 my-2 flex items-center justify-between"
            >
              {item.images[0] && (
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              )}

              <div className="flex flex-col sm:flex-row space-x-4 pl-4">
                <div>
                  <p className="font-bold line-clamp-2">{item.title}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className="font-light text-sm mt-2 line-clamp-1"
                  />
                </div>
                <div className="flex flex-col border rounded-md p-3 mt-4 sm:mt-0">
                  <AddtoCart product={item} />
                  <p className="mt-4 font-bold sm:text-right text-center ">
                    {total}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col justify-end p-5">
        <p className="font-bold text-right text-walmart text-2xl mb-5">
          Total : {basketTotal}
        </p>
        <Button className="bg-walmart hover:bg-walmart/50 h-20">
          Checkout
        </Button>
      </div>
    </div>
  );
}
