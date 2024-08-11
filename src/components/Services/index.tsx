import React from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { GrLinkNext } from "react-icons/gr";

export const Services = () => {
    return (
        <div className={styles.services}>
            <p className={styles.services__title}>OUR SERVICES</p>
            <p className={styles.services__desc}>Our agency experts will provide you <br /> with a full stack of services</p>
            <div className={styles.services__cards}>
                <div className={styles.services__card}>
                    <Image src={'/assets/img/service1.svg'} alt='service' width={144} height={144}/>
                    <p className={styles.services__name}>Development <br /> services</p>
                    <p className={styles.services__subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                    <p className={styles.services__learn}> Learn more</p>
                </div>

                <div className={styles.services__card}>
                    <Image src={'/assets/img/service2.svg'} alt='service' width={144} height={144}/>
                    <p className={styles.services__name}>Marketing services</p>
                    <p className={styles.services__subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                    <p className={styles.services__learn}> Learn more</p>

                </div>

                <div className={styles.services__card}>
                    <Image src={'/assets/img/service3.svg'} alt='service' width={144} height={144}/>
                    <p className={styles.services__name}>Design services</p>
                    <p className={styles.services__subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                    <p className={styles.services__learn}> Learn more</p>
            <button className={styles.services__btn}>Explore our services   <GrLinkNext className={styles.services__icon} /></button>

                </div>
            </div>
        </div>
    );
};
