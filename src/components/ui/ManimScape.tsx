'use client';

// ManimScape: a fixed full-screen canvas behind the whole page, mimicking
// Manim's rotating NumberPlane background with a few slow-orbiting mobjects
// (circle, square, triangle) and a dashed graph-axes pair. Pure CSS animation.

import styles from './ManimScape.module.css';

export default function ManimScape() {
    return (
        <div className={styles.scene} aria-hidden>
            <div className={styles.rotator}>
                <svg className={styles.field} viewBox="0 0 800 800">
                    <defs>
                        <pattern id="ms-dots" width="36" height="36" patternUnits="userSpaceOnUse">
                            <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(236,230,230,0.10)" />
                        </pattern>
                    </defs>
                    {/* subtle dotted grid */}
                    <rect width="800" height="800" fill="url(#ms-dots)" />
                    {/* axes */}
                    <line x1="400" y1="0" x2="400" y2="800" stroke="rgba(236,230,230,0.05)" />
                    <line x1="0" y1="400" x2="800" y2="400" stroke="rgba(236,230,230,0.05)" />
                    {/* faint orbiting circles */}
                    <circle cx="400" cy="400" r="320" fill="none" stroke="rgba(88,196,221,0.16)" strokeDasharray="4 10" />
                    <circle cx="400" cy="400" r="220" fill="none" stroke="rgba(199,120,221,0.14)" strokeDasharray="4 10" />
                </svg>
            </div>

            {/* orbiting mobjects */}
            <div className={styles.orbit}>
                <div className={`${styles.mobject} ${styles.circle}`} />
                <div className={`${styles.mobject} ${styles.square}`} />
                <div className={`${styles.mobject} ${styles.triangle}`} />
            </div>

            {/* corner axes decoration */}
            <svg className={styles.axes} viewBox="0 0 200 140" fill="none">
                <line x1="10" y1="130" x2="190" y2="130" stroke="rgba(88,196,221,0.35)" strokeWidth="1.5" />
                <line x1="10" y1="130" x2="10" y2="10" stroke="rgba(199,120,221,0.35)" strokeWidth="1.5" />
                <path d="M10 130 L60 92 L110 108 L170 40" stroke="rgba(236,230,230,0.3)" strokeWidth="1.5" strokeDasharray="6 6" className={styles.plotPath} />
            </svg>
        </div>
    );
}