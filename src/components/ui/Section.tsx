'use client';

import styles from './Section.module.css';
import { motion } from 'framer-motion';

interface SectionProps {
    id: string;
    title: string;
    number?: string;
    children: React.ReactNode;
}

// Manim-decoration: animated axes + plotted points under each section title.
function ManimDivider() {
    return (
        <svg className={styles.divider} viewBox="0 0 240 40" fill="none" aria-hidden>
            <line x1="0" y1="30" x2="240" y2="30" stroke="rgba(236,230,230,0.18)" strokeWidth="1" />
            <line x1="0" y1="30" x2="0" y2="6" stroke="rgba(88,196,221,0.4)" strokeWidth="1.5" />
            <motion.path
                d="M8 30 L56 22 L104 26 L152 14 L200 20"
                stroke="#c678dd" strokeWidth="1.5" strokeDasharray="6 6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, ease: 'easeInOut' }}
            />
            {/* scatter points appearing like Manim Dot mobjects */}
            {[[60, 22], [104, 26], [152, 14], [200, 20]].map(([x, y], i) => (
                <motion.circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="2.5"
                    fill="#ffff00"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.25 }}
                />
            ))}
        </svg>
    );
}

export default function Section({ id, title, number, children }: SectionProps) {
    return (
        <section id={id} className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>
                    {number && <span className={styles.titleNumber}>{number}.</span>}
                    {title}
                </h2>
                <ManimDivider />
                {children}
            </div>
        </section>
    );
}