import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
}) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className={cn("relative w-fit", containerClassName)}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
        className={cn(
          "relative z-10 bg-slate-900/80 text-white px-8 py-4 rounded-xl border border-slate-800 backdrop-blur-sm hover:bg-slate-900 transition-colors",
          className
        )}
      >
        {children}
      </motion.div>
    </div>
  );
};