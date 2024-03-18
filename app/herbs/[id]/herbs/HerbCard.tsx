import HerbCardHeader from './HerbCardHeader'
import HerbTraditionCard from './HerbTraditionCard'
import HerbEffectsCard from './HerbEffectsCard'
import HerbAilmentsCard from './HerbAilmentsCard'
import { Herb } from '../../../api/herbs/Herb'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

interface HerbCardProps {
  herb: Herb
}
const HerbCard = ({ herb }: HerbCardProps) => {
  return (
    <Card>
      <Paper variant="outlined">
        <CardContent>
          <Stack direction="column" spacing={2}>
            <HerbCardHeader
              name={herb.name}
              latinName={herb.latin_name}
              img={herb.img}
            />
            <Grid container spacing={2} direction="column">
              <Grid item xs={6}>
                <HerbTraditionCard content={herb.description} />
              </Grid>
              <Grid container direction="row" item xs={6} spacing={2}>
                <Grid item xs={6}>
                  <HerbEffectsCard />
                </Grid>
                <Grid item xs={6}>
                  <HerbAilmentsCard />
                </Grid>
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </Paper>
    </Card>
  )
}

export default HerbCard
