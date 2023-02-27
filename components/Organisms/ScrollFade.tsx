import { easeOut, motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  propsDelay?: number;
};

const ScrollFade = ({ children, propsDelay = 0.1 }: Props) => {
  const cardVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: propsDelay && propsDelay,
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5, margin: "100px" }}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFade;
