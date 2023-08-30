import React, { useContext, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { context } from './Mainpage'
import Popmov from './Popmov'
function Navb() {
  const {search, setsearch} = useContext(context)
  const searchh=(e)=>{
    setsearch(e.target.value)
  }
  // const data = popmovie.filter((item)=>
  // item.original_title.toLowerCase().includes(search.toLowerCase()))     
  return (
    <div>
        <Navbar bg="dark" variant='dark' style={{text:'white'}}>
      <Container>
        <Navbar.Brand href="#home">MOVIES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <input type="text" placeholder=' search....' onChange={searchh}/>
            <Nav.Link href="#home"><Link to='/pop'  style={{textDecoration:'none'}}>Popular movies</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/lat'  style={{textDecoration:'none'}}>Latest movies</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/com'  style={{textDecoration:'none'}}>comedy movies</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <Popmov   abc={data}/> */}
    </div>
  )
}
export default Navb