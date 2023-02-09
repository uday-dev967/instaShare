import styled from 'styled-components'

export const Stories = styled.div`
  display: flex;
  justify-content: center;
`

export const StoriesContainer = styled.div`
  width: 80%;
  min-width: 500px;
  padding: 20px;
`

export const SlickItem = styled.div`
  width: 120px;
  display: inline-block;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const StoryImage = styled.img`
  margin: 0px 10px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 3px solid #ed587b;
  @media screen and (min-width: 768px) {
    height: 80px;
    width: 80px;
    border-radius: 55px;
    border: 4px solid #ed587b;
    display: flex;
  }
`

export const StoryName = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 24px;
  @media screen and (min-width: 768px) {
    width: 100px;
  }
`
