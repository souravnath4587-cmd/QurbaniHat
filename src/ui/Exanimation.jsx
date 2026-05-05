"use client";
import React from "react";
import { useSpring, animated } from "@react-spring/web";

const Exanimation = () => {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });

  return (
    <animated.div
      style={{
        width: 40,
        height: 40,
        background: "#ff6d6d",
        borderRadius: 8,
        ...springs,
      }}
    />
  );
};

export default Exanimation;
