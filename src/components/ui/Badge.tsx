import styles from './Badge.module.css';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'accent';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
    return (
        <span className={`${styles.badge} ${variant === 'accent' ? styles.accent : ''}`}>
            {children}
        </span>
    );
}
