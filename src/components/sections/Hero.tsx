'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

// Manim-style write-on helper: fade + rise, staggered like Write() mobject
// creation. mathContent lines mimic MathTex objects appearing in sequence.
const mathLines = [
    { text: '\\text{This is } Naufal', color: 'var(--accent-primary)' },
    { text: '\\text{Electrical Engineer}', color: 'var(--accent-success)' },
];

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.gridBackground} />
            <div className="container">
                <div className={styles.heroContent}>
                    <div className={styles.textContent}>
                        <motion.span
                            className={styles.greeting}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            &gt; INITIALIZING SYSTEM...
                        </motion.span>

                        <div className={styles.mathBlock}>
                            {mathLines.map((line, i) => (
                                <motion.span
                                    key={i}
                                    className={styles.mathLine}
                                    style={{ color: line.color }}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7, delay: 0.3 + i * 0.5 }}
                                >
                                    {line.text}
                                </motion.span>
                            ))}
                        </div>

                        <motion.h1
                            className={styles.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            Naufal Raihan S.
                        </motion.h1>

                        <motion.p
                            className={styles.tagline}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                        >
                            Electrical Engineering Student specializing in AI, IoT, and Embedded Systems.
                            Building scalable hardware-software solutions.
                        </motion.p>

                        <motion.div
                            className={styles.actions}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        >
                            <Link href="#projects" className={styles.buttonPrimary}>
                                View Projects <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                            </Link>
                            <Link href="#contact" className={styles.buttonSecondary}>
                                Contact Me
                            </Link>
                        </motion.div>
                    </div>

                    <div className={styles.imageContainer}>
                        {/* geometric mobjects drawing in around the portrait */}
                        <motion.svg
                            className={styles.geoRing}
                            viewBox="0 0 200 200"
                            initial={{ opacity: 0, rotate: -60 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                        >
                            <motion.circle
                                cx="100" cy="100" r="96"
                                fill="none" stroke="#ffff00"
                                strokeWidth="1.5" strokeDasharray="4 6"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.4, delay: 0.6 }}
                            />
                            <motion.circle
                                cx="100" cy="100" r="80"
                                fill="none" stroke="#58c4dd"
                                strokeWidth="1.5"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.2, delay: 0.9 }}
                            />
                            <motion.path
                                d="M100 100 L156 44 M100 100 L62 148 M100 100 L44 100"
                                stroke="#c678dd" strokeWidth="1" strokeDasharray="4 4"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.2, delay: 1.1 }}
                            />
                            {/* orbiting dot along the outer ring */}
                            <motion.circle
                                cx="196" cy="100" r="3" fill="#58c4dd"
                                animate={{ cx: [196, 100, 4, 100, 196], cy: [100, 4, 100, 196, 100] }}
                                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                            />
                        </motion.svg>

                        <motion.div
                            className={styles.imageWrapper}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            <Image
                                src="/images/pasFoto.png"
                                alt="Naufal Raihan S"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
