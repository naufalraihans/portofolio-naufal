'use client';

import styles from './BearCanvas.module.css';
import { motion } from 'framer-motion';

// A small Manim-style geometric character: two ear circles, head, muzzle,
// eyes and a muzzle-scribble — drawn one mobject at a time like Manim's
// Write(). Mostly a cute homage, sits in the Hero side panel.
interface BearCanvasProps {
    className?: string;
}

export default function BearCanvas({ className = '' }: BearCanvasProps) {
    const draw = {
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: { duration: 1.1, ease: 'easeInOut' as const },
    };
    return (
        <svg className={`${styles.bear} ${className}`} viewBox="0 0 200 180" aria-hidden>
            {/* ears */}
            <motion.circle cx="56" cy="52" r="22" fill="none" stroke="#ece6e6" strokeWidth="2.5" {...draw} />
            <motion.circle cx="144" cy="52" r="22" fill="none" stroke="#ece6e6" strokeWidth="2.5" {...draw} />
            {/* head */}
            <motion.circle cx="100" cy="96" r="56" fill="none" stroke="#ece6e6" strokeWidth="3" {...draw} />
            {/* muzzle */}
            <motion.circle cx="100" cy="112" r="22" fill="none" stroke="#ece6e6" strokeWidth="2" {...draw} />
            {/* eyes */}
            <motion.circle cx="78" cy="88" r="5" fill="#ece6e6"
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4, delay: 1.2 }} />
            <motion.circle cx="122" cy="88" r="5" fill="#ece6e6"
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4, delay: 1.35 }} />
            {/* mouth */}
            <motion.path d="M100 118 C94 126 106 126 100 118" fill="none" stroke="#ece6e6" strokeWidth="2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.5 }} />
        </svg>
    );
}