'use client';
import { useEffect } from 'react';
import ParallaxBackground from '@/components/ParallaxSpace'; 

import Link from 'next/link';
import styles from '../app/app.module.css';
import { Analytics } from "@vercel/analytics/react"


const Page = () => {

  //const p5button = () => {
  //  // Some logic before navigating
  //  return ;
  //};

  useEffect(() => {
    const contents = document.querySelectorAll<HTMLElement>(`.${styles.content}`);

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
      threshold: 0.5, // Trigger when 50% of the element is visible
      rootMargin: '0px 0px -5% 0px', // Shifts the trigger point to the middle of the viewport
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
      <section style={{
        paddingTop: '20vh',
      }}>
      </section>
      <section className={styles.section}>
        <div className={styles.content} style={{
        }}>
          <div className={styles.h1}>Hello, My name is Kyle Arquilla!</div>
            <p>
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
              <li><strong>Creative Programming:</strong> Building &nbsp;&nbsp;&nbsp;&nbsp;visualizations and experimenting with &nbsp;&nbsp;&nbsp;&nbsp;interactive designs.</li>
              <li><strong>Game Development:</strong> Designing and coding &nbsp;&nbsp;&nbsp;&nbsp;engaging games.</li>
              <li><strong>Skill Building:</strong> Continuously improving my &nbsp;&nbsp;&nbsp;&nbsp;coding and problem-solving abilities.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.content}>
          <span className={styles.h1}>
          My Skills
          </span>
          <div >
            <p>I&apos;m proficient in:</p>
            <ul style={{textAlign: "left"}}>
              <li><strong>Languages:</strong> C++, Python, JavaScript (including p5.js and p5play).</li>
              <li><strong>Frameworks:</strong> React and Next.js, thats how i made this webpage. </li>
              <li><strong>Tools:</strong> Git/GitHub, Linux command line.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.content}>
          <span className={styles.h1}>
            Projects & Research
          </span>
          <div>
            <p>I love working on projects that combine creativity, problem-solving, and software development. Some of my personal projects include:</p>
            <ul style={{ textAlign: "left" }}>
              <li>
                <strong>LED Matrix Controller:</strong> A Python client that allows me to control my LED matrix remotely over the internet from my PC.
              </li>
              <li>
                <strong>Robot Arm Controller:</strong> A Python program that lets me control a robot arm over the internet using a PC Panel media controller with knobs and sliders. I handle raw USB input from the panel and translate it into movement commands.
              </li>
              <li>
                <strong>Game Development:</strong> A game built using p5play and JavaScript, showcasing my love for game design and interactive programming.
              </li>
              <li>
                <strong>Creative Programming:</strong> Various visual programming experiments, including an A* pathfinding visualization.
              </li>
              <li>
                <strong>Portfolio Website:</strong> The very website you&apos;re on, built with React and Next.js.
              </li>
              <li>
                <strong>Research in Explainable AI (XAI):</strong> Contributed to research exploring transparency in artificial intelligence.
              </li>
            </ul>
            <p>Along with these, I’ve worked on numerous smaller projects, mostly in <strong>Python</strong> and <strong>JavaScript</strong>, though I am also proficient in <strong>C++</strong>. Check out my <a href="#">Portfolio</a> to explore more of my work!</p>
          </div>
        </div>
      </section>
      <section className={styles.section}>
      <Link href="/AStar">
        <button className={styles.content} >A-Star Path Finder</button>
      </Link>
      </section>
      <section className={styles.section}>
      <Link href="https://karquilla.github.io/UFO-game/" >
        <button className={styles.content} >Cosmic Chaos 	&#40;game&#41;</button>
      </Link>
      </section>
    <Analytics />
    </ParallaxBackground>
    
  );
};

export default Page;