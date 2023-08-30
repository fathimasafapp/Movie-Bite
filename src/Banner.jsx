import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import {LatestMovies} from './Url'
import { imagepath } from './Url'
import { context } from './Mainpage'
function Banner() {
  const{ban,setban}=useContext(context)
    const [banr, setbanr] = useState([])
    useEffect(() => {
      axios.get(LatestMovies).then(res=>setbanr(res.data.results))
    }, [])
    console.log(banr);
    const obj=banr[0]
    console.log(obj)
    const randomIndex = Math.floor(Math.random() * banr.length);
    const effect = banr[randomIndex];  
  return (
    <>
      {obj && ban && <div style={{backgroundImage:`url(${imagepath+effect.backdrop_path || imagepath+obj.poster_path})`,backgroundSize:'100% 100%',height:'100vh',backgroundRepeat:"no-repeat"}}>
      <h1 style={{textAlign:'center'}}><i>{effect.original_title}</i></h1> 
      <p style={{textAlign:'center'}}><b>{effect.release_date}</b></p>  
     </div>}
     </>
  )
}
export default Banner