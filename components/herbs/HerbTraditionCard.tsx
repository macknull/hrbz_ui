import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

interface HerbTraditionCardProps {
  content?: string, 
}
const HerbTraditionCard = ({ content }: HerbTraditionCardProps) => {
  return (
    <div className={styles['herb-tradition-container']}>
      <div className={styles['herb-tradition-content-container']}>
        <div className={styles['herb-tradition-header-container']}>Tradycja</div>
        <div className={styles['herb-tradition-subtext-container']}>
          {content}  
        </div>
      </div>
      <div className={styles['tradition-icon-container']}>
        <img className={styles['herb-content-icon']} src="/img/sun.jpg" alt='tradition icon' />
      </div>
    </div>
  )
}

export default HerbTraditionCard
