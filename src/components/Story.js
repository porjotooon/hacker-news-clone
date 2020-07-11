import React, { useState, useEffect } from 'react'
import { getStory } from '../services/api'

export const Story = ({ storyId }) => {
    const [story, setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    }, [])

    return story && story.url ? (
        <>
            <a href={story.url}>{story.title}</a>
            <p>By: {story.by}</p>
            <br></br>
        </>
    ) : null
}