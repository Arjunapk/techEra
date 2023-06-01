import {
  NotFoundCard,
  NotFoundCardImage,
  NotFoundCardHeading,
  NotFoundCardDescription,
} from './styledComponents'

const NotFound = () => (
  <NotFoundCard>
    <NotFoundCardImage
      src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
      alt="not found"
    />
    <NotFoundCardHeading>Page Not Found</NotFoundCardHeading>
    <NotFoundCardDescription>dfsdjfksdjflk</NotFoundCardDescription>
  </NotFoundCard>
)

export default NotFound
