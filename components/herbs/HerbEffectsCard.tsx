import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

interface HerbEffectsCardProps {
  content?: string, 
}
const HerbEffectsCard = ({ content }: HerbEffectsCardProps) => {
  return (
    <div className={styles['herb-effects-container']}>
      <div className={styles['herb-tradition-header-container']}>Działanie</div>
      <div className={styles['herb-tradition-content-container']}>
        <ul>
          <li>Wspomagające trawienie</li>
          <li>Przeciwzapalne</li>
          <li>Nasenne i uspokajające</li>
          <li>Wspomagające gojenie</li>
        </ul>
      </div>
    </div>
  )
}

export default HerbEffectsCard
