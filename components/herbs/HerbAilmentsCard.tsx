import Typography from '@mui/material/Typography'
import HerbContentSectionCard from './HerbContentSectionCard'

interface HerbAilmentsCardProps {
  content?: string
}
const HerbAilmentsCard = ({ content }: HerbAilmentsCardProps) => {
  return (
    <HerbContentSectionCard
      title="Dolegliwości"
      content={
        <Typography component="span" variant="body1">
          <ul>
            <li>Niestrawność</li>
            <li>Infekcje</li>
            <li>Stres</li>
            <li>Lekkie urazy skóry</li>
          </ul>
        </Typography>
      }
    />
  )
}

export default HerbAilmentsCard
