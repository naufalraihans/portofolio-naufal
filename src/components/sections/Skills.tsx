import Section from '../ui/Section';
import Badge from '../ui/Badge';
import Reveal from '../ui/Reveal';
import Tilt3DCard from '../ui/Tilt3DCard'; // New import
import styles from './Skills.module.css';
import { Zap, Terminal, Cpu, Brain } from 'lucide-react';

const SKILLS = [
    {
        category: "Electrical Engineering",
        icon: <Zap size={24} />,
        items: [
            "Basic Circuit Analysis",
            "Electronics (Analog & Digital)",
            "Power Systems Fundamentals",
            "Electrical Measurements & Instrumentation",
            "Circuit Simulation (Proteus, Multisim)"
        ]
    },
    {
        category: "Programming & Software",
        icon: <Terminal size={24} />,
        items: [
            "Python",
            "C / C++",
            "MATLAB",
            "Flutter",
            "Web Development (HTML, CSS, JavaScript)",
            "LaTeX"
        ]
    },
    {
        category: "Embedded Systems & IoT",
        icon: <Cpu size={24} />,
        items: [
            "Arduino",
            "ESP32",
            "Microcontroller with Sensor Integration ",
            "Serial Communication",
            "IoT Data Monitoring",
            "API Integration"
        ]
    },
    {
        category: "AI & Data",
        icon: <Brain size={24} />,
        items: [
            "Machine Learning (Random Forest, BERT)",
            "Data Preprocessing",
            "Prediction Models for IoT Systems",
            "Environmental & Sensor Data Analysis"
        ]
    }
];

export default function Skills() {
    return (
        <Section id="skills" title="Technical Capabilities" number="01">
            <div className={styles.grid}>
                {SKILLS.map((skillGroup, index) => (
                    <Reveal key={skillGroup.category} delay={index * 0.1}>
                        <Tilt3DCard className={styles.skillCard}>
                            <div className={styles.cardGlow} />
                            <div className={styles.header}>
                                <div className={styles.iconWrapper}>
                                    {skillGroup.icon}
                                </div>
                                <h3 className={styles.title}>{skillGroup.category}</h3>
                            </div>
                            <div className={styles.badgeContainer}>
                                {skillGroup.items.map((skill) => (
                                    <Badge key={skill} variant="default">{skill}</Badge>
                                ))}
                            </div>
                        </Tilt3DCard>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
