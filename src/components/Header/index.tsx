import React from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { GrLinkNext } from "react-icons/gr";

export const Header = () => {

    return (
        <div className={styles.header}>
            <Image className={styles.header__img} src={'/assets/img/header.svg'} alt='header' width={680} height={152}></Image>
            <div className={styles.header__content}>
                <button className={styles.header__btn}>Explore our services   <GrLinkNext className={styles.header__icon} /></button>
            <Image className={styles.header__contentimg} src={'/assets/img/content.svg'} alt='contentimage' width={157} height={30}></Image>
            </div>
        </div>
    );
};
