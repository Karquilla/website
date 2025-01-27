'use client';
import styles from '../components/ButtonsHome.module.css'
import {AnimatedWrapper, AnimatedWrapperInner} from './AnimateButton';

const ButtonSetHome = () => {
    return (
        
            <div style={{display: "flex", }}> 
            <AnimatedWrapper>
                <div className={styles.container}>
                <AnimatedWrapperInner>
                    <button className={styles.downloadButton}>
                        <a href="/Kyle_Arquilla_Resume.pdf" 
                            download="/Kyle_Arquilla_Resume.pdf"> 
                            Download My Resume 
                        </a>
                    </button>
                </AnimatedWrapperInner>
                <AnimatedWrapperInner>
                    <button className={styles.downloadButton}>
                        <a href="/AStar" > Astar </a>
                    </button>
                </AnimatedWrapperInner>
                <AnimatedWrapperInner>
                    <button className={styles.downloadButton}>
                        <a href="https://karquilla.github.io/UFO-game/" > 
                            Cosmic Chaos &#40;game&#41; 
                        </a>
                    </button>
                </AnimatedWrapperInner>
                </div>
            </AnimatedWrapper>
            </div>
        
    );
};
  export default ButtonSetHome;