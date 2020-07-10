import React, { useState,useEffect } from 'react'
import { getStoryID, getStory } from '../services/api'

export const StoryContainer = () => {
  const [storyIds, setStoryIds] = useState([])
  useEffect(()=>{
    getStoryID().then(data => setStoryIds(data))
  }, [])
  return(
    <p>{JSON.stringify(storyIds)}</p>
  )
}