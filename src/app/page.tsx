'use client';
import { useEffect } from 'react';
import ParallaxBackground from '@/components/ParallaxSpace'; 
import Link from 'next/link';
import styles from '../app/app.module.css';

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
      rootMargin: '0px 0px -30% 0px', // Shifts the trigger point to the middle of the viewport
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
      <section className={styles.section}>
        <span className={styles.content}>Hello, My name is Kyle Arquilla!</span>
      </section>
      <section className={styles.section}>
        <span className={styles.content}>BIO</span>
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
    </ParallaxBackground>
  );
};

export default Page;