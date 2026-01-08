import styles from './Section.module.css';

interface SectionProps {
    id: string;
    title: string;
    number?: string;
    children: React.ReactNode;
}

export default function Section({ id, title, number, children }: SectionProps) {
    return (
        <section id={id} className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>
                    {number && <span className={styles.titleNumber}>{number}.</span>}
                    {title}
                </h2>
                {children}
            </div>
        </section>
    );
}
