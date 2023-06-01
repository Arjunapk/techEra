import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import {
  CourseDetailsContainer,
  CourseDetailsCard,
  CourseDetailsImage,
  CourseDetailsText,
  CourseDetailsHeading,
  CourseDetailsDescription,
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

class CoursesDetails extends Component {
  state = {courseDetails: {}, apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    this.setState({apiStatus: apiConstants.process})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/te/courses/${id}`
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = {
      id: data.course_details.id,
      description: data.course_details.description,
      name: data.course_details.name,
      imageUrl: data.course_details.image_url,
    }
    if (response.ok) {
      this.setState({
        courseDetails: updatedData,
        apiStatus: apiConstants.success,
      })
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
    const {courseDetails} = this.state
    const {name, description, imageUrl} = courseDetails

    return (
      <>
        <Header />
        <CourseDetailsContainer>
          <CourseDetailsCard>
            <CourseDetailsImage src={imageUrl} alt={name} />
            <CourseDetailsText>
              <CourseDetailsHeading>{name}</CourseDetailsHeading>
              <CourseDetailsDescription>{description}</CourseDetailsDescription>
            </CourseDetailsText>
          </CourseDetailsCard>
        </CourseDetailsContainer>
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
      <RetryButton type="button" onClick={this.getCourseDetails}>
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

export default CoursesDetails
