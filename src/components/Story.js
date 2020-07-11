import React, { useState, useEffect } from 'react'
import { getStory } from '../services/api'
import { StoryWrapper } from '../styles/StoryStyles'
import styled from 'styled-components'

const StoryTitle = styled.h1`
    margin-bottom: 5px;
    font-size: 18px;
    line-height: 1.8;
    margin: 0;
    text-decoration: none;
    a {
        color: #2e2e2c;
        background-color: #f8dc3d;
        text-decoration: none;
    }
`
// helper function to show how long before the post was posted
const mapTime = timestamp => {
    const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);
  
    let interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return `${interval} years`;
    }
    interval = Math.floor(seconds / 2592000);
  
    if (interval > 1) {
      return `${interval} months`;
    }
    interval = Math.floor(seconds / 86400);
  
    if (interval > 1) {
      return `${interval} days`;
    }
    interval = Math.floor(seconds / 3600);
  
    if (interval > 1) {
      return `${interval} hours`;
    }
    interval = Math.floor(seconds / 60);
  
    if (interval > 1) {
      return `${interval} minutes`;
    }
  
    return `${Math.floor(seconds)} seconds`;
  }


export const Story = ({ storyId }) => {
    const [story, setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    }, [])

    return story && story.url ? (
        <StoryWrapper>
            <StoryTitle>
                <a href={story.url}>{story.title}</a>
            </StoryTitle>
            <div>
                <span style={{paddingRight:'10px'}}>
                    <strong><em>By:</em></strong> {story.by} 
                </span>
                <span style={{paddingRight:'10px'}}>
                    <strong><em>Posted:</em></strong> {mapTime(story.time)} 
                </span>
                <span style={{paddingRight:'10px'}}>
                    <strong><em>Score:</em></strong> {story.score}
                </span>
            </div>
        </StoryWrapper>
    ) : null
}