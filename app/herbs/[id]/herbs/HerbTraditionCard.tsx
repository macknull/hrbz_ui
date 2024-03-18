import HerbContentSectionCard from './HerbContentSectionCard'
import Typography from '@mui/material/Typography'

interface HerbContentSectionCardProps {
  content: string
  img?: string
}
const HerbTraditionCard = ({ content, img }: HerbContentSectionCardProps) => {
  return (
    <HerbContentSectionCard
      title="Tradycja"
      content={
        <Typography
          variant="body1"
          sx={{
            paddingLeft: '16px',
          }}
        >
          {content}
        </Typography>
      }
    />
  )
}

export default HerbTraditionCard
