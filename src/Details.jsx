import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { context } from './Mainpage';
import { imagepath } from './Url';
function Details() {
    const {safa}=useParams();
    console.log(safa);
    const {filter} = useContext(context)
    const [fildata]=filter
    console.log(filter);
    return (
    <div >
         <h1 style={{textAlign:'center'}}> {fildata.original_title || fildata.name}</h1>
      <div style={{width:750,height:400,marginLeft:'20%',marginTop:'5px'}}>
    <img src={imagepath+fildata.backdrop_path || imagepath+fildata.poster_path} style={{width:'100%',height:'100%'}}/>
    </div>
   <div style={{textAlign:'center',backgroundColor:'black',color:'white',width:'100%', height:'100%',marginTop:'8px'}}>
    <h4> {fildata.overview}</h4>
    <h4> Language:{fildata.original_language}</h4>
    <h4> Vote avg: {fildata.vote_average} </h4>
    <h4> Vote count:{fildata.vote_count}</h4>
    <h4> {fildata.release_date || fildata.first_air_date}</h4>
</div>
    </div>
  )
}
export default Details








