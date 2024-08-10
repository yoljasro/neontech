import React from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { GrLinkNext } from "react-icons/gr";

export const Services = () => {
    return (
        <div className={styles.services}>
            <p className={styles.services__title}>OUR SERVICES</p>
            <p className={styles.services__desc}>Our agency experts will provide you <br /> with a full stack of services</p>
        </div>
    );
};
