'use client';
import { useEffect } from 'react';
import styles from '../p5collection/p5collection.module.css';

const Page = () => {
  useEffect(() => {
    const contents = document.querySelectorAll<HTMLElement>(`.${styles.content}`);

    // Function to handle observing entries
    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
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
    <>
      <section className={styles.section}>
        <span className={styles.content}>project one</span>
      </section>
      <section className={styles.section}>
        <span className={styles.content}>Lorem ipsum dolor</span>
      </section>
      <section className={styles.section}>
        <span className={styles.content}>Lorem ipsum dolor</span>
      </section>
      <section className={styles.section}>
        <span className={styles.content}>Lorem ipsum dolor</span>
      </section>
      <section className={styles.section}>
        <span className={styles.content}>Lorem ipsum dolor</span>
      </section>
      <section className={styles.section}>
        <span className={styles.content}>Lorem ipsum dolor</span>
      </section>
    </>
  );
};

export default Page;