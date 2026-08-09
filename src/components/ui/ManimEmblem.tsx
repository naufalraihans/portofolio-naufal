'use client';

import styles from './ManimEmblem.module.css';
import { motion } from 'framer-motion';

interface ManimEmblemProps {
    variant: 'circuit' | 'code' | 'chip' | 'brain';
    color?: string;
}

// Small animated geometric emblem, styled like a Manim mobject (thin strokes,
// dashed draws, orbiting dots). Used in skill card headers.
export default function ManimEmblem({ variant, color = 'var(--accent-primary)' }: ManimEmblemProps) {
    const paths = {
        circuit: (
            <>
                {/* triangle circuit nodes */}
                <motion.polygon
                    points="30,8 6,40 54,40"
                    fill="none" stroke="#ffff00" strokeWidth="1.5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2 }}
                />
                <line x1="6" y1="40" x2="30" y2="8" stroke="#ffff00" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="30" cy="8" r="2.5" fill="#ffff00" />
                <circle cx="6" cy="40" r="2.5" fill="#ffff00" />
                <circle cx="54" cy="40" r="2.5" fill="#ffff00" />
            </>
        ),
        code: (
            <>
                <motion.path
                    d="M8 24 L24 8 L42 40 L58 22"
                    fill="none" stroke="#58c4dd" strokeWidth="1.5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2 }}
                />
                <circle cx="58" cy="22" r="2.5" fill="#58c4dd" />
                <motion.circle
                    cx="40" cy="18" r="18" fill="none" stroke="#c678dd"
                    strokeWidth="1" strokeDasharray="3 4"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />
            </>
        ),
        chip: (
            <>
                <motion.rect
                    x="18" y="18" width="28" height="28"
                    fill="none" stroke="#87c7a1" strokeWidth="1.5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2 }}
                />
                {[8, 40, 26, 20].map((x, i) => (
                    <line key={i} x1={x} y1="18" x2={x} y2="8" stroke="#87c7a1" strokeWidth="1" />
                ))}
                {[8, 40, 26, 20].map((x, i) => (
                    <line key={i} x1={x} y1="46" x2={x} y2="56" stroke="#87c7a1" strokeWidth="1" />
                ))}
            </>
        ),
        brain: (
            <>
                <motion.circle
                    cx="32" cy="32" r="20"
                    fill="none" stroke="#fc6255" strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                />
                <motion.path
                    d="M18 24 C14 18 22 14 26 18 M46 24 C50 18 42 14 38 18"
                    fill="none" stroke="#fc6255" strokeWidth="1"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                />
                <motion.circle
                    cx="14" cy="38" r="2" fill="#ffff00"
                    animate={{ cx: [14, 32, 50, 32, 14] }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
                />
            </>
        ),
    }[variant];

    return (
        <div className={styles.wrapper}>
            <svg
                className={styles.emblem}
                viewBox="0 0 64 64"
                style={{ color }}
                aria-hidden
            >
                {paths}
            </svg>
        </div>
    );
}