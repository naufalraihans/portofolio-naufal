import Section from '../ui/Section';
import Badge from '../ui/Badge';
import { Github, ExternalLink, Cpu, Activity, Zap, Globe, BookOpen } from 'lucide-react';
import styles from './Projects.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '../ui/Reveal';

interface Project {
    title: string;
    problem: string;
    solution: string;
    stack: string[];
    icon: React.ReactNode;
    links: { github?: string; demo?: string };
    image?: string;
}

const PROJECTS: Project[] = [
    {
        title: 'Yoen Rattan Gallery',
        problem: 'Traditional artisans lacked a scalable digital platform to reach a global audience, limiting market expansion.',
        solution: 'Developed a high-performance modern gallery website with optimized asset loading and SEO strategies to showcase local craftsmanship globally.',
        stack: ['Next.js', 'React', 'SEO Optimization', 'Responsive Design'],
        icon: <Globe size={32} />,
        links: { demo: 'https://yoenrattan.com' },
        image: '/images/yoenrattan.png'
    },
    {
        title: 'Laboratorium Algoritma & Pemrograman',
        problem: 'Practicum management was decentralized, making it difficult for students to access modules, schedules, and coding resources efficiently.',
        solution: 'Engineered a centralized academic portal serving students and lecturers, featuring module distribution, real-time schedules, and an integrated coding learning platform.',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        icon: <BookOpen size={32} />,
        links: { demo: 'https://lab-ap.vercel.app/' },
        image: '/images/lab-ap.png'
    },
    {
        title: 'Model AI for Grading System',
        problem: 'Grading system was decentralized, making it difficult for students to access modules, schedules, and coding resources efficiently.',
        solution: 'Engineered a centralized academic portal serving students and lecturers, featuring module distribution, real-time schedules, and an integrated coding learning platform.',
        stack: ['Python', 'TensorFlow', 'BERT Algorithm'],
        icon: <Zap size={32} />,
        links: { github: '#', demo: '#' },
    },
    {
        title: 'Autonomous Drone Navigation',
        problem: 'GPS-denied environments pose challenges for standard drone positioning systems.',
        solution: 'Implemented visual odometry using stereo cameras and an onboard NVIDIA Jetson Nano for SLAM processing.',
        stack: ['C++', 'ROS 2', 'OpenCV', 'Embedded Systems'],
        icon: <Cpu size={32} />,
        links: { github: '#' },
    },
    {
        title: 'Industrial IoT Monitor',
        problem: 'Legacy factory equipment lacks digital interfaces for predictive maintenance.',
        solution: 'Built a non-intrusive vibration analysis node using ESP32 sending MQTT data to a time-series database.',
        stack: ['C', 'ESP32', 'MQTT', 'InfluxDB', 'Grafana'],
        icon: <Activity size={32} />,
        links: { github: '#', demo: '#' },
    },
];

export default function Projects() {
    return (
        <Section id="projects" title="Selected Projects" number="02">
            <div className={styles.grid}>
                {PROJECTS.map((project, index) => (
                    <Reveal key={index} width="100%" delay={index * 0.1}>
                        <article className={styles.projectCard}>
                            <div className={styles.projectHeader}>
                                <div className={styles.visualPlaceholder}>
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <>
                                            {project.icon}
                                            <span style={{ marginLeft: '12px' }}>system_diagram.png</span>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <div className={styles.projectLinks}>
                                    {project.links.github && (
                                        <Link href={project.links.github} aria-label="GitHub">
                                            <Github size={18} className={styles.linkIcon} />
                                        </Link>
                                    )}
                                    {project.links.demo && (
                                        <Link href={project.links.demo} aria-label="Live Demo">
                                            <ExternalLink size={18} className={styles.linkIcon} />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <div>
                                <h4 className={styles.sectionTitle}>Problem</h4>
                                <p className={styles.text}>{project.problem}</p>

                                <h4 className={styles.sectionTitle}>Engineering Solution</h4>
                                <p className={styles.text}>{project.solution}</p>
                            </div>

                            <div className={styles.stack}>
                                {project.stack.map((tech) => (
                                    <Badge key={tech}>{tech}</Badge>
                                ))}
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
