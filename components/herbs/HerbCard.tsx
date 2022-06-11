import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import HerbCardHeader from './HerbCardHeader'

const herbTraditionContent = 'W medycynie tradycyjnej  uchodził za panaceum. Tradycja stosowania rumianku w ziołolecznictwie sięga czasów najdawniejszych. Starożytni Egipcjanie uważali rumianek za dar Ra, boga Słońca i leczyli za jego pomocą oparzenia słoneczne. Dioskurides w „De Materia Medica” (50-70 r.n.e.) zalecał go jako środek na ból brzucha.'

interface HerbCardProps {
  title: string, 
}
const HerbCard = ({ title }: HerbCardProps) => {
  return (
    <div className={styles['herb-card-container']}>
      <HerbCardHeader name='rumianek pospolity' latinName='Matricaria chamomilla' img='/img/chamomile_wiki.jpg' />
      <div className={styles['herb-content-container']} >
        <div className={styles['herb-tradition-container']}>
          <div className={styles['herb-tradition-content-container']}>
            <div className={styles['herb-tradition-header-container']}>Tradycja</div>
            <div className={styles['herb-tradition-subtext-container']}>
              {herbTraditionContent}  
            </div>
          </div>
          <div className={styles['tradition-icon-container']}>
            <img className={styles['herb-content-icon']} src="/img/sun.jpg" alt='tradition icon' />
          </div>
        </div>
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
        <div className={styles['herbz-sections-spacing']}> </div>
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
      </div>
    </div>
  )
}

export default HerbCard
