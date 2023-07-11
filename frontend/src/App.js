import React, {useState, useEffect} from 'react';
import './App.css'


export default function App() {
  const [message, setMesasge] = useState(null)

  useEffect(() => {
    const url = process.env.REACT_APP_BACKEND_URL + 'api/'

    console.log(url)

    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setMesasge(data.message)
    })
  }, [])

  if (!message) return <div>Loading...</div>

  return (
    <div>{message}</div>
  )
}