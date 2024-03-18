import HerbContentSectionCard from './HerbContentSectionCard'
import Typography from '@mui/material/Typography'

interface HerbEffectsCardProps {
  content?: string
}
const HerbEffectsCard = ({ content }: HerbEffectsCardProps) => {
  return (
    <HerbContentSectionCard
      title="Działanie"
      content={
        <Typography component="span" variant="body1">
          <ul>
            <li>Wspomagające trawienie</li>
            <li>Przeciwzapalne</li>
            <li>Nasenne i uspokajające</li>
            <li>Wspomagające gojenie</li>
          </ul>
        </Typography>
      }
    />
  )
}

export default HerbEffectsCard
