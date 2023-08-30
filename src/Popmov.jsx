import React, { useContext, useEffect } from 'react'
import { PopularMovies ,imagepath} from './Url'
import axios from 'axios'
import { Button,Card} from 'react-bootstrap'
import { context } from './Mainpage'
import { Link } from 'react-router-dom'
function Popmov({url}) {
  const{setban}=useContext(context)
  setban(false)
  const {popmovie, setpopmovie,filter,setfilter,search} = useContext(context)
const data = popmovie.filter((item)=>(item?.original_title?.toLowerCase() || item?.name?.toLowerCase()).includes(search.toLowerCase()))     
  useEffect(() => {
    axios.get(url).then((res)=>setpopmovie(res.data.results))
  }, [url])
  console.log(popmovie);
  const det=(id)=>{
      const filt = popmovie.filter((item) =>
      item.id===id)
      setfilter(filt)
  }
  return (
    <div style={{marginLeft:"10%",marginRight:'10%'}}>
    {data.map((item)=>{
      return(
        <div>
 <Card style={{ width: '16rem',float:'left',margin:'12px',width:'200px',height:'300px'}}>
      <Card.Img variant="top" src={imagepath+item.backdrop_path  ||  imagepath+item.poster_path }/>
      <Card.Body>
        <Card.Title>{item.original_title || item.name}</Card.Title>
        <Card.Text>
          {item.release_date || item.first_air_date}
        </Card.Text>
    <Link to={`/detail/${item.id}`}><Button variant="primary" onClick={()=>det(item.id)} style={{marginTop:'8px'}}>explore</Button></Link>
      </Card.Body>
    </Card>
      </div>
      )
     })}
    </div>
  )
}
export default Popmov
