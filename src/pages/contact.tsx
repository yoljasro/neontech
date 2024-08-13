import React from 'react';
import styles from '../styles/contact.module.sass';
import Image from 'next/image';
import { GrLinkNext } from "react-icons/gr";
import Link from 'next/link';

 const Contact = () => {
    return (
        <div className={styles.contact}>
            <p className={styles.contact__title}>Interested? <br /> Let’s talk!</p>
        </div>
    );
};

export default Contact