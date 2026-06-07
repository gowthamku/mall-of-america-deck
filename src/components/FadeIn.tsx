"use client";

import { motion } from "framer-motion";

export default function FadeIn({
children,
direction = "up",
}: {
children: React.ReactNode;
direction?: "up" | "left" | "right";
}) {
const variants = {
up: { opacity: 0, y: 80 },
left: { opacity: 0, x: -30 },
right: { opacity: 0, x: 50 },
};

return (
<motion.div
initial={variants[direction]}
whileInView={{
opacity: 1,
x: 0,
y: 0,
}}
viewport={{ once: true }}
transition={{
duration: 0.9,
ease: "easeOut",
}}
>
{children}
</motion.div>
);
}
