import React from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { GrLinkNext } from "react-icons/gr";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";


export const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.footer__section}></div>
            <div className={styles.footer__container}>
                <p className={styles.footer__title}>Ready for your project</p>
                <button className={styles.footer__btn}>Get in touch</button>
                <div className={styles.footer__content}>
                    <Image className={styles.navbar__logo} src={'/assets/img/logo.svg'} alt='logo' width={236} height={76} />
                    <ul className={styles.footer__menu}>
                        <li>Home</li>
                        <li>About us </li>
                        <li>Blog</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className={styles.footer__socials}>
                    <FaFacebookF />
                    <FaTwitter />
                    <IoLogoInstagram/>
                    <IoLogoLinkedin/>
                </div>
            </div>
        </div>
    );
};
