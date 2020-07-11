import axios from 'axios'

export const baseUrl = " https://hacker-news.firebaseio.com/v0/"
export const storyUrl = `${baseUrl}/item/`
export const storyListUrl = `${baseUrl}/topstories.json`

//returns all data related to story item
export const getStory = async (storyId) => {
    const result = await axios
    .get(`${storyUrl + storyId}.json`).then(({ data }) => data)
    
    return result
}

//returns an array of IDs corresponding to stories
export const getStoryID = async () => {
    const result = await axios.get(storyListUrl).then(({ data }) => data)
    return result
}