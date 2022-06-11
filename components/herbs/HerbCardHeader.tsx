import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const herbTraditionContent = 'W medycynie tradycyjnej  uchodził za panaceum. Tradycja stosowania rumianku w ziołolecznictwie sięga czasów najdawniejszych. Starożytni Egipcjanie uważali rumianek za dar Ra, boga Słońca i leczyli za jego pomocą oparzenia słoneczne. Dioskurides w „De Materia Medica” (50-70 r.n.e.) zalecał go jako środek na ból brzucha.'

interface HerbCardHeaderProps {
  name: string, 
  latinName: string,
  img: string
}
const HerbCardHeader = ({ name, latinName, ...props }: HerbCardHeaderProps) => {
  return (
    <div className={styles['herb-header-container']}>
      <div className={styles['herb-icon-container']}>
        <img className={styles['herb-icon']} src="/img/chamomile_wiki.jpg" alt="chamomile icon" />
      </div>
      <div className={styles['herb-name-container']}>
        <div className={styles['herb-name-locale-container']}>{name}</div>
        <div className={styles['herb-name-latin-container']}>{latinName}</div>
      </div>
    </div>
  )
}

export default HerbCardHeader
