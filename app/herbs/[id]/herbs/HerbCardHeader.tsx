import Image from 'next/image'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

interface HerbCardHeaderProps {
  name: string
  latinName: string
  img: string
}
const HerbCardHeader = ({ name, latinName, img }: HerbCardHeaderProps) => {
  return (
    <Card>
      <CardContent>
        <Paper>
          <Grid container spacing={4} direction="row">
            <Grid item xs={6}>
              <div
                style={{ position: 'relative', width: '100%', height: '500px' }}
              >
                <Image
                  src={img}
                  alt="chamomile picture"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Grid>
            <Grid container item direction="column" xs={6} spacing={2}>
              <Grid item>
                <Typography variant="h2" sx={{ pt: '40px' }}>
                  {name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h4"
                  sx={{ fontStyle: 'italic', fontWeight: 'light' }}
                >
                  {latinName}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </CardContent>
    </Card>
  )
}

export default HerbCardHeader
