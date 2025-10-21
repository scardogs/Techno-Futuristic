import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function NeonGrid() {
  return (
    <Box
      position="fixed"
      inset={0}
      zIndex={0}
      pointerEvents="none"
      _before={{
        content: '""',
        position: "absolute",
        inset: 0,
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(0,194,255,0.12) 0, rgba(0,0,0,0) 40%), radial-gradient(circle at 80% 10%, rgba(155,92,255,0.12) 0, rgba(0,0,0,0) 40%), radial-gradient(circle at 60% 80%, rgba(255,31,143,0.12) 0, rgba(0,0,0,0) 35%)",
        filter: "blur(32px)",
      }}
      _after={{
        content: '""',
        position: "absolute",
        inset: 0,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        maskImage:
          "radial-gradient(circle at center, black 40%, transparent 75%)",
      }}
    >
      {/* Animated floating particles */}
      <motion.div
        style={{
          position: "absolute",
          top: "20%",
          left: "15%",
          width: "4px",
          height: "4px",
          background: "rgba(0,194,255,0.6)",
          borderRadius: "50%",
          filter: "blur(1px)",
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "60%",
          right: "20%",
          width: "3px",
          height: "3px",
          background: "rgba(155,92,255,0.6)",
          borderRadius: "50%",
          filter: "blur(1px)",
        }}
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "80%",
          left: "70%",
          width: "2px",
          height: "2px",
          background: "rgba(255,31,143,0.6)",
          borderRadius: "50%",
          filter: "blur(1px)",
        }}
        animate={{
          y: [0, -25, 0],
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Additional floating elements */}
      <motion.div
        style={{
          position: "absolute",
          top: "30%",
          right: "30%",
          width: "6px",
          height: "6px",
          background: "rgba(0,194,255,0.4)",
          borderRadius: "50%",
          filter: "blur(2px)",
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          top: "70%",
          left: "25%",
          width: "5px",
          height: "5px",
          background: "rgba(155,92,255,0.5)",
          borderRadius: "50%",
          filter: "blur(1.5px)",
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, -15, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </Box>
  );
}
