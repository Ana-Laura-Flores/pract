import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function SelectOption({cats, cat, url, handleChangeId}) {
   

  return (
     <div >
         <h1>Elige tu propio Gato</h1>
        <select name="" id="" onChange={handleChangeId}>
            <option value=" "></option>
            {cats && cats.map(cat => <option  key={cat.id} value={cat.id}>{cat.name}</option> )}
        </select>
        <div style={{width: "500px", margin:"20px"}}>
            {url && <img style={{width: "300px", margin:"20px"}} src={url}></img>}
            {url && <div>
                        <p style={{fontSize:"1.5rem", color:"pink"}}>{cat.temperament}</p>
                        <p>{cat.description}</p>
                        <p><span style={{fontWeight:"bold"}}>weight:</span> {cat.weight?.imperial}</p>
                        {/* undefined.imperial rompe el codigo porque no existe. por eso usamos un ? para preguntar si existe weight ahi recien entra en imperial sino lo ignora */}
                        <Link to={`/moreCats`} >
                            <button style={{color:"whitesmoke"}}> Ver más fotos</button> 
                        </Link>
                        {/*  */}
                    </div> }
            
        </div>
        
    </div>
  )
}
