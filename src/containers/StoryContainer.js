import React, { useState,useEffect } from 'react'
import { getStoryID, getStory } from '../services/api'
import { Story } from '../components/Story'

// container managing state for the story IDs
export const StoryContainer = () => {
  const [storyIds, setStoryIds] = useState([])

  useEffect(()=>{
    getStoryID().then(data => setStoryIds(data))
  }, [])

  return(
    storyIds.map(id => <Story id={id}/>)
  )
}