import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import chamomileImg from '../../public/img/chamomile_wiki.jpg'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

interface HerbCardHeaderProps {
  name: string, 
  latinName: string,
  img: string
}
const HerbCardHeader = ({ name, latinName, ...props }: HerbCardHeaderProps) => {
  return (
    <Card>
      <CardContent>
        <Paper>
          <Grid container spacing={4} direction='row'>
            <Grid item xs={6}>
              <Image src={chamomileImg} alt="chamomile picture" />
            </Grid>
            <Grid container item direction='column' xs={6} spacing={2}>
              <Grid item>
                <Typography variant="h2">{name}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4" sx={{ fontStyle: 'italic', fontWeight: 'light' }}>
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
