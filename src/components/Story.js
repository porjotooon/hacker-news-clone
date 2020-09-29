import React, { useState, useEffect } from 'react'
import { getStory } from '../services/api'
import { mapTime } from '../services/mapTime'
import styled from 'styled-components'


const StoryWrapper = styled.section`
 padding-top: 10px;
 margin-bottom: 20px;
 border-top: 1px solid #cccccc;

 &:first-of-type{
     border-top: none;
 }
 
 &:last-of-type{
     margin-bottom: 0;
     padding-bottom: 0;
 } 
`

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