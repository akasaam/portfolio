import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimatedText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.h1
      ref={ref}
      className={className}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {text}
    </motion.h1>
  );
}