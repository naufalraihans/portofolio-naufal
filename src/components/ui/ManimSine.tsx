'use client';

import styles from './ManimSine.module.css';
import { motion } from 'framer-motion';

interface ManimSineProps {
    color?: string;
    amplitude?: number;
    className?: string;
}

// Signature Manim motion: a sine wave that self-draws with a sweeping
// highlight, exactly like the graph that animates in the Manim intro.
export default function ManimSine({ color = '#58c4dd', amplitude = 40, className = '' }: ManimSineProps) {
    const cycle = 120;
    const d = [
        'M0 100',
        ...Array.from({ length: 8 }, (_, i) => {
            const x = (i + 1) * cycle;
            const y = 100 - amplitude * Math.sin((i + 1) * 60 * (Math.PI / 180));
            return `L${x} ${y}`;
        }),
        'L960 100',
    ].join(' ');

    return (
        <div className={`${styles.wrap} ${className}`}>
            <svg viewBox="0 0 960 200" aria-hidden>
                <motion.path
                    d={d}
                    fill="none"
                    stroke={color}
                    strokeWidth="2.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.4, ease: 'easeInOut', delay: 0.3 }}
                />
                {/* sweeping highlight segment */}
                <motion.path
                    d={d}
                    fill="none"
                    stroke="rgba(255,255,255,0.85)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.4, delay: 0.9, ease: 'easeInOut' }}
                />
                {/* traveling dot on the wave */}
                <motion.circle
                    r="4"
                    fill="#ffff00"
                    style={{ offsetPath: `path("${d}")` }}
                    animate={{ offsetDistance: ['0%', '100%'] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                />
            </svg>
        </div>
    );
}