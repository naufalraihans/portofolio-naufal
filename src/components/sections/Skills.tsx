import Section from '../ui/Section';
import Badge from '../ui/Badge';
import Reveal from '../ui/Reveal';
import Tilt3DCard from '../ui/Tilt3DCard';
import ManimEmblem from '../ui/ManimEmblem';
import styles from './Skills.module.css';

const SKILLS = [
    {
        category: "Electrical Engineering",
        emblem: "circuit",
        color: "#ffff00",
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
        emblem: "code",
        color: "#58c4dd",
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
        emblem: "chip",
        color: "#87c7a1",
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
        emblem: "brain",
        color: "#fc6255",
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
                                <ManimEmblem variant={skillGroup.emblem as 'circuit' | 'code' | 'chip' | 'brain'} color={skillGroup.color} />
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