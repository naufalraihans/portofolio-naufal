'use client';

// ManimScape: a faithful NumberPlane backdrop. Manim's NumberPlane is a grid
// of thin lines with +x/−x/+y/−y axis labels and a central dot. This is that,
// built as HTML grid lines + orbiting mobjects + PLACEBO scaffold line (the
// tiny y label + vanishing x axis that steadily redraw, the tiniest elegant
// Manim vignette).

import styles from './ManimScape.module.css';

export default function ManimScape() {
    return (
        <div className={styles.scene} aria-hidden>
            {/* NumberPlane grid */}
            <div className={styles.plane}>
                <div className={styles.axes}>
                    <span className={styles.axisLabel} style={{ left: '0.6%', top: '32%' }}>−y</span>
                    <span className={styles.axisLabel} style={{ left: '94.5%', top: '32%' }}>y</span>
                    <span className={styles.axisLabel} style={{ left: '46%', top: '66%' }}>−x</span>
                    <span className={styles.axisLabel} style={{ left: '46%', top: '19%' }}>x</span>
                    <span className={styles.centerDot} />
                </div>
                {/* Mobject corner bracket */}
                <span className={styles.corner}>{'['} <i>Manim</i> PL<sup>3</sup>{']'}</span>
            </div>

            {/* orbiting dashed mobject rings */}
            <div className={styles.orbit}>
                <div className={`${styles.ring} ${styles.ring1}`} />
                <div className={`${styles.ring} ${styles.ring2}`} />
                <div className={`${styles.mobject} ${styles.dot}`} />
                <div className={`${styles.mobject} ${styles.sq}`} />
                <div className={`${styles.mobject} ${styles.tri}`} />
            </div>
        </div>
    );
}