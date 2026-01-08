import Section from '../ui/Section';
import Reveal from '../ui/Reveal';

export default function About() {
    return (
        <Section id="about" title="Engineering Background" number="00">
            <Reveal>
                <div style={{ maxWidth: '800px' }}>
                    <p className="about-text" style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        I am an Electrical Engineering student driven by a curiosity for how systems work at the intersection of hardware and software.
                        My approach to engineering is grounded in first principles thinking breaking down complex problems into fundamental constraints to design efficient, scalable solutions.
                    </p>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        Currently, my research and development interests focus on <strong>Smart Energy Systems</strong> and <strong>Edge AI</strong>.
                        I believe that the future of efficiency lies in intelligent distributed systems that can operate autonomously in real-time.
                    </p>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        When I'm not prototyping circuits or writing firmware, I am analyzing data to validate models or contributing to open-source engineering tools.
                    </p>
                </div>
            </Reveal>
        </Section>
    );
}
