'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Terminal } from 'lucide-react';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.nav}`}>
                <Link href="/" className={styles.logo}>
                    <Terminal size={24} className="text-accent" strokeWidth={2.5} />
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                        <span className={styles.logoName}>Naufal Raihan</span>
                        <span className={styles.cursor}>_</span>
                        <span className={styles.logoPortfolio}></span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <nav className={styles.links}>
                    {NAV_ITEMS.map((item) => (
                        <Link key={item.label} href={item.href} className={styles.link}>
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileButton}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <nav className={styles.mobileMenu}>
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={styles.link}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}
