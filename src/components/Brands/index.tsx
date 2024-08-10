import React from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { GrLinkNext } from "react-icons/gr";

export const Brands = () => {

    return (
        <div className={styles.brand}>
            <p className={styles.brand__title}>We are blessed to work with amazing brands worldwide</p>
        </div>
    );
};
