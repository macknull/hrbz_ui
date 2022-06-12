import Image from 'next/image'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

interface HerbContentSectionCardProps {
  title: string
  content: JSX.Element
  img?: string
}
const HerbContentSectionCard = ({
  title,
  content,
  img,
}: HerbContentSectionCardProps) => {
  return (
    <Card>
      <Paper>
        <Grid container direction="row">
          <Grid container item direction="column" xs={img ? 8 : true}>
            <Grid item>
              <CardHeader title={title} />
            </Grid>
            <Grid item>
              <CardContent>{content}</CardContent>
            </Grid>
          </Grid>
          {img && (
            <Grid item xs={4}>
              <CardMedia>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Image
                    alt={`herb ${title} section image`}
                    src={img}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </CardMedia>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Card>
  )
}

export default HerbContentSectionCard
