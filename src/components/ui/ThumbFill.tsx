'use client';

import styles from './ThumbFill.module.css';
import { motion } from 'framer-motion';

interface ThumbFillProps {
    variant: 'wave' | 'bars' | 'ai';
    label: string;
}

// Animated Manim-style backdrop for project-card thumbnails (dashed axes,
// plotting line, sample bars, orbiting nodes).
export default function ThumbFill({ variant, label }: ThumbFillProps) {
    return (
        <div className={styles.canvas}>
            <svg className={styles.svg} viewBox="0 0 200 100" aria-hidden>
                <motion.line
                    x1="8" y1="90" x2="192" y2="90" stroke="rgba(236,230,230,0.25)"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />
                <motion.line
                    x1="8" y1="90" x2="8" y2="10" stroke="rgba(236,230,230,0.25)"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />

                {variant === 'ai' ? (
                    <>
                        <motion.circle cx="100" cy="50" r="30" fill="none" stroke="#fc6255" strokeWidth="1.2"
                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                            transition={{ duration: 1.2 }} />
                        <motion.circle cx="100" cy="50" r="2.5" fill="#ffff00"
                            animate={{ cx: [70, 130, 100, 70] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} />
                        <text x="100" y="55" textAnchor="middle" fill="#fc6255" fontSize="9" fontFamily="monospace">fit(x)</text>
                    </>
                ) : (
                    <>
                        {/* plotting dots along a curve */}
                        {[[30, 68], [62, 50], [94, 58], [126, 34], [158, 52], [180, 40]].map(([x, y], i) => (
                            <motion.circle key={i} cx={x} cy={y} r="2" fill="#58c4dd"
                                initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.15 }} />
                        ))}
                        <motion.path
                            d="M12 70 C40 40 56 64 92 44 C118 30 150 56 192 30"
                            fill="none" stroke="#87c7a1" strokeWidth="1.5" strokeDasharray="4 4"
                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                            transition={{ duration: 1.4 }}
                        />
                        {variant === 'bars' && (
                            <motion.path
                                d="M30 62 L70 40 L110 52 L150 30"
                                stroke="#ffff00" strokeWidth="1.2" fill="none"
                                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                                transition={{ duration: 1.1, delay: 0.4 }}
                            />
                        )}
                    </>
                )}
            </svg>
            <span className={styles.label} style={{ color: 'var(--accent-secondary)' }}>
                {label}
            </span>
        </div>
    );
}