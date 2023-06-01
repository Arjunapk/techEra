import styled from 'styled-components'

export const CourseDetailsContainer = styled.div`
  padding: 40px;
  display: flex:
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`

export const CourseDetailsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 400px;
`

export const CourseDetailsImage = styled.img`
  width: 50%;
  height: 100%;
`

export const CourseDetailsText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 400px;
  padding: 20px;
`

export const CourseDetailsHeading = styled.h3`
  color: #1e293b;
  font-size: 25px;
  font-weight: bold;
  font-family: Roboto;
  margin: 0 0 15px 0;
`

export const CourseDetailsDescription = styled.p`
  color: #1e293b;
  font-size: 20px;
  font-weight: 500;
  font-family: Roboto;
  margin: 0;
`

export const LoaderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`

export const FailureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`

export const FailureCardImage = styled.img`
  width: 250px;
  margin: 15px 0;
`

export const FailureCardHeading = styled.h2`
  color: #1e293b;
  font-size: 30px;
  font-weight: bold;
  font-family: Roboto;
  margin: 0 0 15px 0;
`

export const FailureCardDescription = styled.p`
  color: #1e293b;
  font-size: 20px;
  font-weight: 500;
  font-family: Roboto;
  margin: 0 0 15px 0;
`

export const RetryButton = styled.button`
  outline: none;
  border: none;
  background-color: blue;
  padding: 10px 20px;
  margin: 10px 0;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: Roboto;
  border-radius: 5px;
`
