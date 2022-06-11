import styles from '../../styles/Home.module.css'
import HerbCardHeader from './HerbCardHeader'
import HerbTraditionCard from './HerbTraditionCard'
import HerbEffectsCard from './HerbEffectsCard'
import HerbAilmentsCard from './HerbAilmentsCard'
import { Herb } from '../../lib/herbs'

interface HerbCardProps {
  herb: Herb, 
}
const HerbCard = ({ herb }: HerbCardProps) => {
  return (
    <div className={styles['herb-card-container']}>
      <HerbCardHeader name={herb.name} latinName={herb.latin_name} img='/img/chamomile_wiki.jpg' />
      <div className={styles['herb-content-container']} >
        <HerbTraditionCard content={herb.description} />
        <HerbEffectsCard />
        <div className={styles['herbz-sections-spacing']}> </div>
        <HerbAilmentsCard />
      </div>
    </div>
  )
}

export default HerbCard
