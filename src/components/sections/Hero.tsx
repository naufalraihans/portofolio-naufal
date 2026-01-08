'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.gridBackground} />
            <div className="container">
                <div className={styles.content}>
                    <motion.span
                        className={styles.greeting}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        &gt; INITIALIZING SYSTEM...
                    </motion.span>

                    <motion.h1
                        className={styles.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Naufal Raihan S.
                    </motion.h1>

                    <motion.p
                        className={styles.tagline}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Electrical Engineering Student specializing in AI, IoT, and Embedded Systems.
                        Building scalable hardware-software solutions.
                    </motion.p>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <Link href="#projects" className={styles.buttonPrimary}>
                            View Projects <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                        <Link href="#contact" className={styles.buttonSecondary}>
                            Contact Me
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
