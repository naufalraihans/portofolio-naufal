'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import ManimTex from '@/components/ui/ManimTex';
import ManimSine from '@/components/ui/ManimSine';
import BearCanvas from '@/components/ui/BearCanvas';

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

                        {/* MathTex header */}
                        <div className={styles.mathBlock}>
                            <ManimTex tex="\text{This is } Naufal" size="2.6em" className={styles.mathBig} delay={0.3} color={'var(--text-primary)'} />
                            <ManimTex tex="\text{Electrical Engineer}" size="1.6em" className={styles.mathBig} delay={0.6} color={'var(--accent-primary)'} />
                        </div>

                        {/* Manim sine draw, the signature motion */}
                        <ManimSine className={styles.sine} />

                        <motion.p
                            className={styles.tagline}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            Electrical Engineering Student specializing in AI, IoT, and Embedded Systems.
                            Building scalable hardware-software solutions.
                        </motion.p>

                        <motion.div
                            className={styles.actions}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                        >
                            <Link href="#projects" className={styles.buttonPrimary}>
                                View Projects <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                            </Link>
                            <Link href="#contact" className={styles.buttonSecondary}>
                                Contact Me
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right panel: math + geometric mobject around BearCanvas */}
                    <motion.div
                        className={styles.imageContainer}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <ManimTex tex="\sin(\omega t)" size="3em" color={'var(--accent-secondary)'} className={styles.mathLabel} />
                        <ManimTex tex="\int_{0}^{t} f(\tau)\ d\tau" size="2.2em" color={'var(--accent-success)'} className={styles.mathLabel2} />
                        <motion.div className={styles.geoRing}>
                            <svg width="100%" height="100%" viewBox="0 0 320 320" fill="none" aria-hidden>
                                <motion.circle cx="160" cy="160" r="150" stroke="#58c4dd" strokeWidth="1" strokeDasharray="4 8"
                                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.6, delay: 0.6 }} />
                                <motion.circle cx="160" cy="160" r="122" stroke="#c678dd" strokeWidth="1" strokeDasharray="4 8"
                                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.4, delay: 0.9 }} />
                                <motion.path d="M160 160 L276 44" stroke="#f5a623" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 1.1 }} />
                                <motion.path d="M160 160 L160 44" stroke="#ffff00" strokeWidth="1" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} />
                                <motion.circle cx="160" cy="40" r="4" fill="#ffff00"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} />
                                <motion.circle cx="276" cy="40" r="4" fill="#f5a623"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} />
                                <motion.circle
                                    cx="310" cy="160" r="3" fill="#58c4dd"
                                    animate={{ cx: [310, 160, 10, 160, 310], cy: [160, 10, 160, 310, 160] }}
                                    transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                                />
                            </svg>
                        </motion.div>

                        <div className={styles.glassCard}>
                            <h3 className={styles.glassTitle}>Scene: naufal_2025</h3>
                            <BearCanvas />
                            <p className={styles.glassCaption}>THEOREM 1.0 — <em>render the engineer</em></p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}