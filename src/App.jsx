import {useState, useEffect} from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MoreCats from './components/MoreCats'
import SelectOption from './components/SelectOption'
import useCats from './components/useCats'

export default function App() {
  
  const [cat, setCat] = useState({})
  const [url, setUrl] = useState("")
  const allCats = useCats([])
  const imgCat = useCats([])

  
  useEffect (() => {
    allCats.getData(`https://api.thecatapi.com/v1/breeds`) 
         
  }, [])
 
  const getCat = (catId) => {
      if (cat.id) {
          fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${catId}`)
          .then((res) => res.json())
          .then((data) => setUrl(data[0].url))
      }
      
  }
  const handleChangeId = (e) => {
    setCat(allCats.data.find(cat => cat.id == e.target.value));
    getCat(e.target.value)
    
}
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SelectOption url={url} allCats={allCats} cat={cat} handleChangeId={handleChangeId} setCat={setCat} />}/> 
        <Route path='/moreCats' element={<MoreCats cat={cat}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

