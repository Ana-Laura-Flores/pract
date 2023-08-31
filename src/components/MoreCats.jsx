import { useEffect} from 'react'
import { Link } from 'react-router-dom'
import useCats from './useCats'

export default function MoreCats({cat}) {
  const moreCats = useCats([])

  useEffect(() => {
    moreCats.getData(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${cat.id}&api_key=${import.meta.env.VITE_API_KEY_THE_CAT}`)
  }, [cat.id])
  
  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h2>Más imágenes de {cat.name}</h2>
        <Link to={`/`}> 
          <button style={{color:"whitesmoke"}}>Volver</button>
        </Link>
      </div>
      {moreCats.data.map(cat =>  <img style={{width: "300px", margin:"20px"}} key={cat.id} src={cat.url}></img>)}
    </div>
  )
}
