import { Box } from "@chakra-ui/react";

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
    />
  );
}
