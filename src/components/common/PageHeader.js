import { motion } from "framer-motion";
import { Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function PageHeader({ title, subtitle, children, ...props }) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      style={{ width: "100%" }}
    >
      <Box {...props}>
        <Heading
          size={isMobile ? "xl" : "2xl"}
          color="brand.500"
          textShadow="0 0 24px rgba(0,194,255,0.7)"
          mb={subtitle ? 3 : 0}
          bgGradient="linear(to-r, brand.400, purple.500)"
          bgClip="text"
        >
          {title}
        </Heading>
        {subtitle && (
          <Text color="gray.300" fontSize={{ base: "md", md: "lg" }}>
            {subtitle}
          </Text>
        )}
        {children}
      </Box>
    </motion.div>
  );
}
