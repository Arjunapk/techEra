import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import {
  HomeContainer,
  Heading,
  CoursesListCard,
  CoursesListItem,
  CoursesListImage,
  CoursesListName,
  LoaderCard,
  FailureCard,
  FailureCardImage,
  FailureCardHeading,
  FailureCardDescription,
  RetryButton,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  process: 'PROCESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {coursesList: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getCoursesList()
  }

  getCoursesList = async () => {
    this.setState({apiStatus: apiConstants.process})
    const url = 'https://apis.ccbp.in/te/courses'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.courses.map(each => ({
        id: each.id,
        name: each.name,
        logoUrl: each.logo_url,
      }))
      this.setState({coursesList: updatedData, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderCard data-testid="loader">
      <Loader type="ThreeDots" color="red" />
    </LoaderCard>
  )

  renderSuccessView = () => {
    const {coursesList} = this.state

    return (
      <>
        <Header />
        <HomeContainer>
          <Heading>Courses</Heading>
          <CoursesListCard>
            {coursesList.map(each => (
              <CoursesListItem key={each.id}>
                <Link
                  to={`/courses/${each.id}`}
                  style={{textDecoration: 'none'}}
                >
                  <CoursesListImage src={each.logoUrl} alt={each.name} />
                  <CoursesListName>{each.name}</CoursesListName>
                </Link>
              </CoursesListItem>
            ))}
          </CoursesListCard>
        </HomeContainer>
      </>
    )
  }

  renderFailureView = () => (
    <FailureCard>
      <FailureCardImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureCardHeading>dd</FailureCardHeading>
      <FailureCardDescription>dsdfdf</FailureCardDescription>
      <RetryButton type="button" onClick={this.getCoursesList}>
        Retry
      </RetryButton>
    </FailureCard>
  )

  renderSpecifiedView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.process:
        return this.renderLoadingView()
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    return this.renderSpecifiedView()
  }
}

export default Home
