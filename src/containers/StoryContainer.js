import React, { useState,useEffect } from 'react'
import { getStoryID } from '../services/api'
import { Story } from '../components/Story'
import styled from 'styled-components'

const StoryContainerStyle = styled.main`
    max-width: 1014px;
    padding: 20px 15px;
    margin: auto;
`

// container managing state for the story IDs
export const StoryContainer = () => {
  const [storyIds, setStoryIds] = useState([])

  useEffect(()=>{
    getStoryID().then(data => setStoryIds(data))
  }, [])

  return(
    <>
    <StoryContainerStyle>
        <h1>Hacker News Stories</h1>
        {storyIds.map(id => <Story storyId={id} key={id}/>)}
    </StoryContainerStyle>
    </>
  )
}