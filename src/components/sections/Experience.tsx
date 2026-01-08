import Section from '../ui/Section';
import Reveal from '../ui/Reveal';

const EXPERIENCE = [
    {
        role: "Laboratory Assistant",
        org: "Institut Teknologi PLN",
        period: "2024 - Present",
        desc: "Assisting in laboratory operations, including equipment maintenance, sample preparation, and data analysis."
    },
    {
        role: "Web Developer",
        org: "Yoenrattan",
        period: "2024 - Present",
        desc: "Developing and maintaining websites for clients."
    }
];

export default function Experience() {
    return (
        <Section id="experience" title="Experience & Education" number="04">
            <div style={{ display: 'grid', gap: '2rem' }}>
                {EXPERIENCE.map((job, index) => (
                    <Reveal key={index} width="100%">
                        <div style={{ borderLeft: '2px solid var(--border-secondary)', paddingLeft: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{job.role}</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                                <span>{job.org}</span>
                                <span>{job.period}</span>
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>{job.desc}</p>
                        </div>
                    </Reveal>
                ))}

                <Reveal width="100%">
                    <div style={{ borderLeft: '2px solid var(--border-secondary)', paddingLeft: '1.5rem', marginTop: '1rem' }}>
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>Bachelor of Engineering in Electrical Engineering</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                            <span>Institut Teknologi PLN</span>
                            <span>Expected 2027</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)' }}>Focus: Embedded Systems, Control Systems. GPA: 3.8/4.0</p>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}
