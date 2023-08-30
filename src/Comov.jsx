import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { ComedyMovies,imagepath } from './Url'
function Comov() {
  const [comedy, setcomdey] = useState([])
  useEffect(() => {
    axios.get(ComedyMovies).then((res)=>setcomdey(res.data.results))
  }, [])
  console.log(comedy);
  return (
    <div>
    {comedy.map((item)=>{
      return(
      <div style={{marginLeft:"20%",marginRight:'20%'}}>
    <Card style={{ width: '16rem',float:'left',margin:'11px',width:'200px',height:'300px'}}>
      <Card.Img variant="top" src={imagepath+item.backdrop_path || imagepath+item.poster_path }/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.first_air_date}
        </Card.Text>
        <Button variant="primary">explore</Button>
      </Card.Body>
    </Card>
       </div>
      )
    })}
    </div>
  )
}
export default Comov