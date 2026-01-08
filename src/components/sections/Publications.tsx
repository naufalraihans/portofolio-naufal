import Section from '../ui/Section';
import { Book, FileText, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Reveal from '../ui/Reveal';
import Badge from '../ui/Badge';

interface Publication {
    title: string;
    conference: string;
    year: string;
    abstract: string;
    tags: string[];
    link?: string;
}

const PUBLICATIONS: Publication[] = [
    {
        title: "TEKNOLOJIA-AGRI: PEMANFAATAN EBT PADA PERTANIAN DENGAN SISTEM SMARTFARMING BERBASIS IOT UNTUK LINGKUNGAN HIJAU",
        conference: "Independent Research Project",
        year: "2025",
        abstract: "An IoT-based smart farming system powered by renewable energy sources is developed to support sustainable agricultural practices. The system utilizes low-power communication and adaptive energy management to monitor agricultural conditions efficiently. This approach demonstrates how smart farming technologies can reduce energy consumption while maintaining reliable data transmission in rural environments.",
        tags: ["IoT", "Renewable Energy", "Smart Farming"],
        link: "https://zenodo.org/records/15795538"
    },
    {
        title: "TEKNOLOJIA AIR: PEMANFAATAN NATRIUM HIDROKSIDA SEBAGAI CARBON CAPTURE DENGAN INTEGRASI SISTEM IOT",
        conference: "Departemen Kimia  - IPB",
        year: "2025",
        abstract: "This work presents a carbon capture concept based on sodium hydroxide (NaOH) combined with IoT technology to support environmental sustainability. By enabling continuous monitoring and data-driven evaluation of the CO₂ absorption process, the system contributes to the development of more effective and technology-assisted carbon capture solutions.",
        tags: ["IoT", "Carbon Capture", "Environment"],
        link: "https://doi.org/10.5281/zenodo.17066792"
    },
    // Add more publications here
];

export default function Publications() {
    return (
        <Section id="publications" title="Research & Publications" number="03">
            <div style={{ display: 'grid', gap: '2rem' }}>
                {PUBLICATIONS.map((pub, index) => (
                    <Reveal key={index} width="100%">
                        <article style={{
                            padding: '1.5rem',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-primary)',
                            borderRadius: 'var(--radius-md)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: '1.4', marginBottom: '0.5rem' }}>
                                        {pub.title}
                                    </h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Book size={14} /> {pub.conference}
                                        </span>
                                        <span>•</span>
                                        <span>{pub.year}</span>
                                    </div>
                                </div>

                                {pub.link && (
                                    <Link href={pub.link} style={{
                                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                                        fontSize: '0.85rem', color: 'var(--accent-primary)',
                                        padding: '0.5rem 1rem', background: 'var(--bg-tertiary)',
                                        borderRadius: 'var(--radius-sm)',
                                        fontWeight: 500
                                    }}>
                                        Read Paper <ExternalLink size={14} />
                                    </Link>
                                )}
                            </div>

                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                {pub.abstract}
                            </p>

                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {pub.tags.map(tag => (
                                    <Badge key={tag}>{tag}</Badge>
                                ))}
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
