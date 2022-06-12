import styles from '../../styles/Home.module.css'
import HerbCardHeader from './HerbCardHeader'
import HerbTraditionCard from './HerbTraditionCard'
import HerbEffectsCard from './HerbEffectsCard'
import HerbAilmentsCard from './HerbAilmentsCard'
import { Herb } from '../../lib/herbs'
import { alpha, styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';

interface HerbCardProps {
  herb: Herb, 
}
const HerbCard = ({ herb }: HerbCardProps) => {
  return (
    <Card>
      <Paper variant="outlined">
      <CardContent>
        <HerbCardHeader name={herb.name} latinName={herb.latin_name} img='/img/chamomile_wiki.jpg' />
        <div className={styles['herb-content-container']} >
          <HerbTraditionCard content={herb.description} />
          <HerbEffectsCard />
          <div className={styles['herbz-sections-spacing']}> </div>
          <HerbAilmentsCard />
        </div>
      </CardContent>
      </Paper>
    </Card>
  )
}

export default HerbCard
