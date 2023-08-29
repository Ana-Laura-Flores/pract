import {useState, useEffect} from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MoreCats from './components/MoreCats'
import SelectOption from './components/SelectOption'

export default function App() {
  const [cats, setCats] = useState([])
  const [cat, setCat] = useState({})
  const [url, setUrl] = useState("")
  useEffect (() => {
      fetch(`https://api.thecatapi.com/v1/breeds`) 
          .then((res) => res.json())
          .then((data) => setCats(data))
  }, [])
 
  useEffect(() => {
      if (cat.id) {
          fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${cat.id}`)
          .then((res) => res.json())
          .then((data) => setUrl(data[0].url))
      }
      
  }, [cat])
  const handleChangeId = (e) => {
    setCat(cats.find(cat => cat.id == e.target.value));
    
}
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SelectOption url={url} cats={cats} cat={cat} handleChangeId={handleChangeId} setCat={setCat} />}/> 
        <Route path='/moreCats' element={<MoreCats cats={cats} cat={cat}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

