import { motion } from "framer-motion";
import { Box, VStack } from "@chakra-ui/react";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function PageContainer({ children, spacing = 10, ...props }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      style={{ width: "100%" }}
    >
      <VStack align="stretch" spacing={spacing} {...props}>
        {children}
      </VStack>
    </motion.div>
  );
}
