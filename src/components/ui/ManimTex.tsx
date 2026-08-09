'use client';

import katex from 'katex';
import 'katex/dist/katex.min.css';
import { motion } from 'framer-motion';

// ManimTex: renders a LaTeX expression the way Manim's MathTex does —
// KaTeX at display size, inheriting the current text color (Manim's
// default ink is the light ManimGRAY "white" on a black scene).
interface ManimTexProps {
    tex: string;
    size?: string;
    className?: string;
    delay?: number;
    color?: string;
}

export default function ManimTex({ tex, size = '1.4em', className = '', delay = 0, color }: ManimTexProps) {
    const html = katex.renderToString(tex, { displayMode: false, throwOnError: false });
    return (
        <motion.span
            className={className}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            style={{ color, fontSize: size, display: 'inline-block' }}
            // KaTeX output has no untrusted HTML; dangerouslySetInnerHTML is the
            // standard way to inject katex-rendered markup.
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}