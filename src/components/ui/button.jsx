import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-amber-500 text-[#101f33] shadow-sm hover:bg-amber-400",
      navy: "bg-[#0c1b2e] text-white hover:bg-[#173152]",
      outline: "border border-slate-300 bg-white text-slate-800 hover:border-amber-500 hover:bg-amber-50",
      ghost: "text-slate-700 hover:bg-slate-100",
    },
    size: {
      default: "h-11 px-5 py-2.5",
      sm: "h-9 rounded-lg px-3",
      lg: "h-13 px-7 text-base",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: { variant: "default", size: "default" },
});

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
});
Button.displayName = "Button";
export { Button, buttonVariants };
