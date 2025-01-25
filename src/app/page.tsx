'use client';
import { useEffect } from 'react';
import ParallaxBackground from '@/components/ParallaxSpace'; 
import ResumeDownload from '@/components/DLButton'; 

import styles from '../app/app.module.css';
import { Analytics } from "@vercel/analytics/react"



const Page = () => {

  //const p5button = () => {
  //  // Some logic before navigating
  //  return ;
  //};

  useEffect(() => {
    const contents = document.querySelectorAll<HTMLElement>(`.${styles.section}`);

    // Function to handle observing entries
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        } else {
          entry.target.classList.remove(styles.show); // Remove the class when it leaves the viewport
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0.25], // Trigger when 50% of the element is visible
      
    });

    contents.forEach((content) => {
      observer.observe(content);
    });

    return () => {
      contents.forEach((content) => observer.unobserve(content));
    };
  }, []);

  return (
    
    <ParallaxBackground>
       <ResumeDownload />
      <section style={{
        paddingTop: '10vh',
      }}>
      
      </section>
      
     
      <section className={styles.section}>
        <div className={styles.content} style={{
        }}>
          <div className={styles.h1}>Hello, My name is Kyle Arquilla!</div>
            <p style={{fontFamily: "var(--font-sublima-light)"}}>
              I&apos;m a computer science student at Kent State University with a passion for programming and computers.
            </p>
          </div>
      </section>
      <section className={styles.section}>
        <div className={styles.content}>
          <span className={styles.h1}>
            What I Do
          </span>
          <div className={styles.list}>
            <p style={{marginBottom: '20px', textAlign: 'center'}}>I enjoy experimenting with code and creating fun projects. Some of my favorite ways to spend my free time include:</p>
            <ul >
              <li><strong className={styles.h2}>Creative Programming:</strong> Building visualizations and experimenting with interactive designs.</li>
              <li><strong className={styles.h2}>Game Development:</strong> Designing and coding engaging games.</li>
              <li><strong className={styles.h2}>Skill Building:</strong> Continuously improving my coding and problem-solving abilities.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.content}>
          <span className={styles.h1}>
          My Skills
          </span>
          <div className={styles.list}>
            <p style={{marginBottom: '20px', textAlign: 'center'}}>I&apos;m proficient in:</p>
            <ul style={{textAlign: "left"}}>
              <li><p className={styles.h2}>Languages:</p> C++, Python, JavaScript (including p5.js and p5play).</li>
              <li><p className={styles.h2}>Frameworks:</p> React and Next.js, thats how i made this webpage. </li>
              <li><p className={styles.h2}>Tools:</p> Git/GitHub, Linux command line.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.content} style={{ marginBottom: "100px" }}>
          <span className={styles.h1}>
            Projects & Research
          </span>
          <div className={styles.list}>
            <p style={{marginBottom: '20px', textAlign: 'center'}}>I love working on projects that combine creativity, problem-solving, and software development. Some of my personal projects include:</p>
            <ul style={{ textAlign: "left" }}>
              <li><p className={styles.h2}>LED Matrix Controller:</p> A Python client that allows me to control my LED matrix remotely over the internet from my PC.</li>
              <li><p className={styles.h2}>Robot Arm Controller:</p> A Python program that lets me control a robot arm over the internet using a PC Panel media controller with knobs and sliders. 
                I handle raw USB input from the panel and translate it into movement commands.</li>
              <li><p className={styles.h2}>Game Development:</p> A game built using p5play and JavaScript, showcasing my love for game design and interactive programming.</li>
              <li><p className={styles.h2}>Creative Programming:</p> Various visual programming experiments, including an A* pathfinding visualization.</li>
              <li><p className={styles.h2}>Portfolio Website:</p> The very website you&apos;re on, built with React and Next.js.</li>
              <li style={{ marginBottom: "30px" }}><p className={styles.h2}>Research in Explainable AI (XAI):</p> Contributed to research exploring transparency in artificial intelligence.</li>
            </ul>
            <p style={{textAlign: 'center'}}>Along with these, I’ve worked on numerous smaller projects, mostly in <strong>Python</strong> and <strong>JavaScript</strong>, though I am also proficient in <strong>C++</strong>. Check out my <a href="#">Portfolio</a> to explore more of my work!</p>
          </div>
        </div>
      </section>
    <Analytics />
    </ParallaxBackground>
    
  );
};

export default Page;