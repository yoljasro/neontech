import React , {useState} from 'react';
import styles from '../styles/contact.module.sass';
import Image from 'next/image';
import { GrLinkNext } from "react-icons/gr";
import Link from 'next/link';
import TextField from '@mui/material/TextField';

const Contact = () => {
    return (
        <div className={styles.contact}>
            <p className={styles.contact__title}>Interested? <br /> Let’s talk!</p>
            <p className={styles.contact__desc}>Just fill this form and we will contact you promptly to discuss your project. Hate forms? Drop us a message at <span>neontechagency@gmail.com</span> </p>
            <form className={styles.contact__form}>
            <TextField className={styles.contact__input} id="standard-basic" label="Your Name" variant="standard" />
            <TextField className={styles.contact__input} id="standard-basic" label="Your Email" variant="standard" />
            <TextField className={styles.contact__input} id="standard-basic" label="Tell Us About Your Project" variant="standard" />
            <button className={styles.contact__btn}>Explore our services   <GrLinkNext className={styles.header__icon} /></button>

            </form>
        </div>
    );
};

export default Contact