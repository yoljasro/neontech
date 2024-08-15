import React from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { GrLinkNext } from "react-icons/gr";

export const Projects = () => {
    return (
        <div className={styles.project} id='projects'>
             <p className={styles.project__title}>PROJECTS</p>
            <p className={styles.project__desc}>We guide game-changing companies, across platforms & places, through agile design & digital experience. </p>
            <div className={styles.project__cards}>
                <div className={styles.project__card}>
                    <Image src={'/assets/img/project1.png'} alt='project' width={522} height={341}/>
                    <p className={styles.project__name}>KARDISE</p>
                </div>
                <div className={styles.project__card}>
                    <Image src={'/assets/img/project1.png'} alt='project' width={522} height={341}/>
                    <p className={styles.project__name}>KARDISE</p>
                </div>

                <div className={styles.project__card}>
                    <Image src={'/assets/img/project1.png'} alt='project' width={522} height={341}/>
                    <p className={styles.project__name}>KARDISE</p>
                </div>

                <div className={styles.project__card}>
                    <Image src={'/assets/img/project1.png'} alt='project' width={522} height={341}/>
                    <p className={styles.project__name}>KARDISE</p>
                </div>
            </div>
            <button className={styles.project__btn}>Explore all projects</button>
        </div>
    );
};
