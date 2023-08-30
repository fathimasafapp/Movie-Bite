import React, { useState } from 'react'
import Navb from './Navb'
import Popmov from './Popmov'
import Latmov from './Latmov'
import Comov from './Comov'
import { BrowserRouter, Route, Routes,  }from 'react-router-dom'
import { ComedyMovies, LatestMovies, PopularMovies } from './Url'
import Banner from './Banner'
import { createContext } from 'react'
import Details from './Details'
const context=createContext()
function Mainpage() {
  const [ban, setban] = useState(true)
  const [popmovie, setpopmovie] = useState([])
    const [filter, setfilter] = useState({})
    const [search, setsearch] = useState("")
  return (
    <div>
        <context.Provider value={{ban,setban,popmovie,setpopmovie,filter,setfilter,search,setsearch}}>
         <BrowserRouter>
         <Navb/>
         <Banner/>
         <Routes>
          <Route  path='/pop' element={<Popmov url={PopularMovies}/>}/>
          <Route  path='/lat' element={<Popmov url={LatestMovies}/>}/>
          <Route  path='/com' element={<Popmov url={ComedyMovies}/>}/>
          <Route  path='/detail/:id' element={<Details/>}/>
         </Routes>
         </BrowserRouter>
         </context.Provider>       
    </div>
  )
}
export default Mainpage
export {context}
