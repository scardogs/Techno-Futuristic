import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function Card({
  children,
  variant = "default",
  hover = true,
  ...props
}) {
  const variants = {
    default: {
      border: "1px solid",
      borderColor: "whiteAlpha.200",
      bg: "rgba(255,255,255,0.02)",
      backdropFilter: "blur(10px)",
      borderRadius: "16px",
      boxShadow: "0 0 24px rgba(0,194,255,0.08)",
    },
    neon: {
      border: "1px solid",
      borderColor: "brand.500",
      bgGradient: "linear(to-br, rgba(0,194,255,0.1), rgba(155,92,255,0.05))",
      backdropFilter: "blur(10px)",
      borderRadius: "20px",
      boxShadow: "0 0 30px rgba(0,194,255,0.15)",
    },
    purple: {
      border: "1px solid",
      borderColor: "purple.500",
      bgGradient: "linear(to-br, rgba(155,92,255,0.1), rgba(255,31,143,0.05))",
      backdropFilter: "blur(10px)",
      borderRadius: "20px",
      boxShadow: "0 0 30px rgba(155,92,255,0.15)",
    },
  };

  const hoverStyles = hover
    ? {
        _hover: {
          transform: "translateY(-2px)",
          boxShadow: "0 0 40px rgba(0,194,255,0.2)",
          borderColor: "brand.400",
        },
        transition: "all 0.3s ease",
      }
    : {};

  return (
    <motion.div
      variants={fadeInScale}
      whileHover={hover ? { scale: 1.02 } : {}}
      whileTap={hover ? { scale: 0.98 } : {}}
    >
      <Box {...variants[variant]} {...hoverStyles} {...props}>
        {children}
      </Box>
    </motion.div>
  );
}
