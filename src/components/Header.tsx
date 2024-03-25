"use client";

import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Header() {
  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const router = useRouter();

    const input = e.currentTarget.input.value;

    router.push(`/search?q=${input}`);
  };

  return (
    <header className="flex flex-col md:flex-row items-center bg-walmart px-5 py-3 md:px-10 md:py-7 space-x-5">
      <Link href={"/"} className="mb-5 md:mb-0">
        <Image src="/walmart.png" alt="logo" width={150} height={150} />
      </Link>

      <form
        onSubmit={handelSubmit}
        className="flex  bg-white w-full items-center rounded-full flex-1"
      >
        <input
          className="flex-1 px-4 placeholder:text-sm outline-none rounded-l-full text-sm "
          type="text"
          name="input"
          placeholder="Search Everything..."
        />
        <button>
          <Search className="rounded-full w-10 h-10 px-2 cursor-pointer bg-yellow-400" />
        </button>
      </form>

      <div className="flex space-x-5 mt-5 md:mt-0">
        <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center 
          text-sm space-x-2"
        >
          <Grid2X2 size={20} />
          <p>Department</p>
        </Link>
        <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center 
          text-sm space-x-2"
        >
          <LayoutGrid size={20} />
          <p>Servieces</p>
        </Link>
        <Link
          href={"/"}
          className="  text-white font-bold items-center 
          text-sm space-x-2"
        >
          <Heart size={20} />
          <div>
            <p className="text-xs font-extralight">Reorder</p>
            <p>My Item</p>
          </div>
        </Link>
        <Link
          href={"/"}
          className="  text-white font-bold items-center 
          text-sm space-x-2"
        >
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sign in</p>
            <p>Account</p>
          </div>
        </Link>
        <Link
          href={"/basket"}
          className="  text-white font-bold items-center 
          text-sm space-x-2"
        >
          <ShoppingCart size={20} />
          <div>
            <p className="text-xs font-extralight">No Item</p>
            <p>$0.00</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
