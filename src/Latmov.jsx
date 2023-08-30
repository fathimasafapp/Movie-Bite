import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { LatestMovies,imagepath } from './Url'
function Latmov() {
  const [latest, setlatest] = useState([])
  useEffect(() => {
    axios.get(LatestMovies).then((res)=>setlatest(res.data.results))
  }, [])
  console.log(latest);
  return (
    <div>
    {latest.map((item)=>{
      return(
        <div style={{marginLeft:"20%",marginRight:'20%'}}>
    <Card style={{ width: '16rem',float:'left',margin:'11px',width:'200px',height:'300px'}}>
      <Card.Img variant="top" src={imagepath+item.backdrop_path || imagepath+item.poster_path }/>
      <Card.Body>
        <Card.Title>{item.original_title}</Card.Title>
        <Card.Text>
          {item.release_date}
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

export default Latmov