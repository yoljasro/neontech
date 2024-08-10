import React from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { GrLinkNext } from "react-icons/gr";

export const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <Image className={styles.navbar__logo} src={'/assets/img/logo.svg'} alt='logo' width={118} height={38} />
            <ul className={styles.navbar__menu}>
                <li>Home</li>
                <li>About us</li>
                <li>Projects</li>
                <li>Services</li>
            </ul>
            <button  className={styles.navbar__btn}>Contact us  <GrLinkNext className={styles.navbar__icon} />
            </button>
        </div>
    );
};
