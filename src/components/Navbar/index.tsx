import React, { useState } from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { GrLinkNext } from "react-icons/gr";
import Link from 'next/link';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`${styles.navbar} ${menuOpen ? styles.navbar_open : ''}`}>
            <Link href={'/'}>
                <Image className={styles.navbar__logo} src={'/assets/img/logo.svg'} alt='logo' width={118} height={38} />
            </Link>
            <button className={styles.navbar__toggle} onClick={toggleMenu}>
                {menuOpen ? '✕' : '☰'}
            </button>
            <div className={`${styles.navbar__item} ${menuOpen ? styles.navbar__item_open : ''}`}>
                <ul className={styles.navbar__menu}>
                    <Link href={'/'}>
                        <li>Home</li>
                    </Link>

                    <li>About us</li>
                    <Link href={'#projects'}>
                    <li>Projects</li>
                    </Link>
                    <Link href={'/services'}>
                        <li>Services</li>
                    </Link>
                </ul>
                <Link href={'/contact'}>
                    <button className={styles.navbar__btn}>
                        Contact us <GrLinkNext className={styles.navbar__icon} />
                    </button>
                </Link>
            </div>
        </div>
    );
};
