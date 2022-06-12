import HerbCardHeader from './HerbCardHeader'
import HerbTraditionCard from './HerbTraditionCard'
import HerbEffectsCard from './HerbEffectsCard'
import HerbAilmentsCard from './HerbAilmentsCard'
import { Herb } from '../../lib/herbs'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'

interface HerbCardProps {
  herb: Herb
}
const HerbCard = ({ herb }: HerbCardProps) => {
  return (
    <Card>
      <Paper variant="outlined">
        <CardContent>
          <HerbCardHeader
            name={herb.name}
            latinName={herb.latin_name}
            img="/img/chamomile_wiki.jpg"
          />
          <div className={'herb-content-container'}>
            <HerbTraditionCard content={herb.description} img="/img/sun.jpg" />
            <HerbEffectsCard />
            <HerbAilmentsCard />
          </div>
        </CardContent>
      </Paper>
    </Card>
  )
}

export default HerbCard
