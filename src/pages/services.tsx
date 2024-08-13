import React from 'react'
import styles from '../styles/services.module.sass'
import { Work } from '@/components/Work'

const Services = () => {
  return (
    <div>
    <div className={styles.services}>
        <p className={styles.services__title}>OUR SERVICES</p>
        <p className={styles.services__desc}>From proof of concepts and to complex systems of an enterprise-level – we’ve got everything covered.</p>
    </div>
    <Work/>
    </div>
  )
}

export default Services