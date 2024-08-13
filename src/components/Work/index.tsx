import React from 'react';
import styles from './index.module.sass';
import Image from 'next/image';
import { GrLinkNext } from "react-icons/gr";
import Link from 'next/link';

export const Work = () => {

    return (
        <div className={styles.work}>
            <div className={styles.work__cont}>
                <div className={styles.work__text}>
                    <p className={styles.work__title}>Strategy services</p>
                    <p className={styles.work__desc}>We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.</p>
                    <div className={styles.work__list}>
                        <ul className={styles.work__types}>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> Market and competitive research</li>
                            </div>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> CRM & sales funnel strategy</li>
                            </div>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> Brand positioning & messaging</li>
                            </div>
                        </ul>
                        <ul className={styles.work__types}>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> Automation</li>
                            </div>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> UX consulting</li>
                            </div>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> Marketing strategy</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className={styles.work__img}></div>

            </div>
            <div className={styles.work__cont}>
            <div className={styles.work__img}></div>
                <div className={styles.work__text}>
                    <p className={styles.work__title}>Marketing services</p>
                    <p className={styles.work__desc}>Reality is a new reality. With a well-built digital strategy we leverage this stellar tech to propel your brand forward.</p>
                    <div className={styles.work__list}>
                        <ul className={styles.work__types}>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> Digital marketing campaigns</li>
                            </div>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> Lead nurturing</li>
                            </div>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> Marketing personas</li>
                            </div>
                        </ul>
                        <ul className={styles.work__types}>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> Content creation</li>
                            </div>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> Branding</li>
                            </div>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> SEO</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>


            <div className={styles.work__cont}>
                <div className={styles.work__text}>
                    <p className={styles.work__title}>Design services</p>
                    <p className={styles.work__desc}>We design digital platforms to empower users and your brand's tribe. This deep understanding of what motivates them allows us to forge and fine-tune the most powerful strategies that generate rapid ROI for your business..</p>
                    <div className={styles.work__list}>
                        <ul className={styles.work__types}>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> User testing & personas</li>
                            </div>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> Wireframing and prototyping</li>
                            </div>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> Website design</li>
                            </div>
                        </ul>
                        <ul className={styles.work__types}>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> UI/UX Design</li>
                            </div>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> Graphic print design   </li>
                            </div>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> Animations</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className={styles.work__img}></div>

            </div>


            <div className={styles.work__cont}>
            <div className={styles.work__img}></div>
                <div className={styles.work__text}>
                    <p className={styles.work__title}>Development services</p>
                    <p className={styles.work__desc}>Together, we define, develop, and deliver different design solutions that create an unparalleled competitive advantage for Web3 companies in a sea of competition.</p>
                    <div className={styles.work__list}>
                        <ul className={styles.work__types}>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> Website maintenance and hosting</li>
                            </div>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> Platform and data migration</li>
                            </div>
                        </ul>
                        <ul className={styles.work__types}>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> Website building</li>
                            </div>
                            <div className={styles.work__section}>
                                <div className={styles.work__line}></div>
                                <li> CRM implementation</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            

            
        </div>
    );
};
