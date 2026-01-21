import Section from '../ui/Section';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import Link from 'next/link';
import Reveal from '../ui/Reveal';

export default function Contact() {
    return (
        <Section id="contact" title="Contact Protocols" number="05">
            <Reveal>
                <div style={{ maxWidth: '600px', display: 'grid', gap: '1.5rem' }}>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        I am currently open to internship opportunities and collaborative research projects.
                        Use the following channels for communication.
                    </p>

                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <Link href="mailto:naufalraihansaputra@gmail.com" style={{
                            display: 'flex', alignItems: 'center', gap: '1rem',
                            padding: '1rem', background: 'var(--bg-secondary)',
                            border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-md)'
                        }}>
                            <Mail className="text-accent" />
                            <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>naufalraihansaputra@gmail.com</span>
                        </Link>

                        <Link href="https://www.linkedin.com/in/naufal-raihan-saputra-2b2a2127b/" style={{
                            display: 'flex', alignItems: 'center', gap: '1rem',
                            padding: '1rem', background: 'var(--bg-secondary)',
                            border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-md)'
                        }}>
                            <Linkedin className="text-accent" />
                            <span style={{ color: 'var(--text-primary)' }}>LinkedIn Profile</span>
                        </Link>

                        <Link href="https://github.com/naufalraihans" style={{
                            display: 'flex', alignItems: 'center', gap: '1rem',
                            padding: '1rem', background: 'var(--bg-secondary)',
                            border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-md)'
                        }}>
                            <Github className="text-accent" />
                            <span style={{ color: 'var(--text-primary)' }}>GitHub Profile</span>
                        </Link>

                        <Link href="/images/CV.pdf" target="_blank" rel="noopener noreferrer" download style={{
                            display: 'flex', alignItems: 'center', gap: '1rem',
                            padding: '1rem', background: 'var(--bg-secondary)',
                            border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-md)'
                        }}>
                            <FileText className="text-accent" />
                            <span style={{ color: 'var(--text-primary)' }}>Curriculum Vitae (PDF)</span>
                        </Link>
                    </div>
                </div>
            </Reveal>
        </Section>
    );
}
