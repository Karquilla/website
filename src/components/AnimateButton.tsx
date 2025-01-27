"use client"; // Ensures it's a client component in Next.js 13+

import { motion } from "framer-motion";

// 🎯 Scale Animation (Grows on Hover, Shrinks on Tap)
export const AnimatedWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {children}
        </motion.div>
    );
};

export const AnimatedWrapperInner = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {children}
        </motion.div>
    );
};

