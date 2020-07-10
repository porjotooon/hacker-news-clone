import React, {useState,useEffect} from 'react'

export default function App(){
  const [title, setTitle] = useState('')
  const [list, setList] = useState([])
  useEffect(() => {
    async function fetchStories() {
      try {
        const response = await fetch(
        //  `https://hacker-news.firebaseio.com/v0/item/23790207.json?print=pretty`
        `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
            );
        const json = await response.json();
          setList(json)
      } catch(error) {console.log("error")}
  }
  fetchStories();
}, [])

  const items = list.slice(0 , 30)
  return (
    <>
  {items.map(id => {
    return(
    <h1 key={id}>{id}</h1>)
  })}
    </>
  )
}