import React, {useState,useEffect} from 'react'

export default function App(){
  const [title, setTitle] = useState('')
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty`
            );
        const json = await response.json();
          setTitle(json.title)
      } catch(error) {console.log("error")}
  }
  fetchData()
}, [])

  return (
    <>
  <h1>{title}</h1>
    </>
  )
}