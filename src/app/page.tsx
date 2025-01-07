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
          BIO
          </span>
        </div>
      </section>
      <section className={styles.section}>
      <Link href="/AStar">
        <button className={styles.content} >A-Star Path Finder</button>
      </Link>
      </section>
      <section className={styles.section}>
        <span className={styles.content}>Keep scrolling for more animations!</span>
      </section>
      <section className={styles.section}>
        <span className={styles.content}>Keep scrolling for more animations!</span>
      </section>
      <section className={styles.section}>
        <span className={styles.content}>Keep scrolling for more animations!</span>
      </section>
    <Analytics />
    </ParallaxBackground>
    
  );
};

export default Page;