import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

interface HerbAilmentsCardProps {
  content?: string, 
}
const HerbAilmentsCard = ({ content }: HerbAilmentsCardProps) => {
  return (
    <div className={styles['herb-effects-container']}>
      <div className={styles['herb-tradition-header-container']}>Dolegliwości</div>
      <div className={styles['herb-tradition-content-container']}>
        <ul>
          <li>Niestrawność</li>
          <li>Infekcje</li>
          <li>Stres</li>
          <li>Lekkie urazy skóry</li>
        </ul>
      </div>
    </div>
  )
}

export default HerbAilmentsCard
