import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  min-height: 90vh;
`

export const Heading = styled.h1`
  color: #1e293b;
  font-size: 30px;
  font-weight: bold;
  font-family: Roboto;
  margin: 0 0 15px 0;
`

export const CoursesListCard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center
  padding: 0;
  margin: 10px 0;
  list-style: none;
`

export const CoursesListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
  width: 150px;
  flex-grow: 1;
`

export const CoursesListImage = styled.img`
  width: 50px;
  height: 80px;
  margin-right: 25px;
`

export const CoursesListName = styled.p`
  color: #1e293b;
  font-size: 20px;
  font-weight: bold;
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
