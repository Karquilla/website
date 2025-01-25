'use client';
import Link from 'next/link';
import styles from '../components/DLButton.module.css'

const ResumeDownload = () => {
    return (
        <div className={styles.container}>
            <button className={styles.downloadButton}>
                <a href="/Kyle_Arquilla_Resume.pdf" download="/Kyle_Arquilla_Resume.pdf" >
                    Download My Resume
                </a>
            </button>
            <button className={styles.downloadButton}>
                <a href="/AStar" >
                    Astar
                </a>
            </button>
            <button className={styles.downloadButton}>
                <a href="https://karquilla.github.io/UFO-game/" >
                    Cosmic Chaos &#40;game&#41;
                </a>
            </button>
        </div>
    );
};
  export default ResumeDownload;