"use client";
import Basket from "@/components/Basket";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { log } from "console";
import { useRouter } from "next/navigation";

export default function BasketIntercept() {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }
  return (
    <Dialog
      open
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          onDismiss();
        }
      }}
    >
      <DialogContent className="w-full max-w-3xl overflow-scroll   h-4/5 ">
        <DialogHeader>
          <DialogTitle>Basket</DialogTitle>
          <DialogDescription>Contents of your basket</DialogDescription>
        </DialogHeader>
        <Basket />
      </DialogContent>
    </Dialog>
  );
}
