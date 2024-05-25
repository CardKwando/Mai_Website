import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import bootstrap from './assets/bootstrap.svg'
import patrickStar from "./assets/Pat_has_been_shooketh_2.jpeg";
import background1 from "./assets/2034232.jpeg";
import cheese from "./assets/other/cheese.jpeg";
import ocean from "./assets/other/ocean_pic.png";
import eveningRide from "./assets/other/riding_evening.gif";
import MAILogo from "./assets/MAI-Logo.svg";

import './App.css'
import Message from './Message';
import ListGroup from './Components/ListGroup';

function App() {
  const [count, setCount] = useState(0)
  //const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //const [name, setName] = useState('')
  
  return (
    <div style={{ 
      backgroundImage: `url(${background1})`, 
      backgroundSize: "cover", 
      height: "200vh",
      backgroundRepeat: "no-repeat", 
      backgroundPosition: "center"
    }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <a className="navbar-brand" href="#">Navbar</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"> 
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/Mai_Website">Home <span className="sr-only">(current)</span></a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="./test_page/">Other Page</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search" 
            />
          </form>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div>
      </nav>

      <div className="container" style={{ backgroundColor: "midnightblue", height: "200px"}}>
        <div> 
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <a href="https://getbootstrap.com/" target="_blank">
              <img src={bootstrap} className="logo bootstrap" alt="Bootstap logo" />
            </a>
          </div>
          <h3>Vite + React + Bootstrap</h3>
        </div>
      </div>
      
      <div className="container" style={{ 
        alignContent: 'center', 
        backgroundColor: 'lightgray', 
        width: '300px', 
        height: '300px',
        borderRadius: '100px'}}>
        <a>
          <img src={patrickStar} width={250} height={250} style={{ borderRadius: '75px'}} 
          className='Patrick Star' alt="Patrick"/>
        </a>
      </div>
      
      <div className="container">
        <div><Message /></div>
        <button className="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div className="rowC">
          <div className="card"><ListGroup /></div>
          <div className="card">
            <h1 style={{textAlign: 'center'}}>CHEESE</h1>
            <img src={cheese} className="cheese" alt="cheese slice"/>
          </div>
          <div className="card">
            <h3>Card 3</h3>
            <div style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
              <button className="button" 
                style={{justifyContent: 'center', width: '100px', height: '100px'}} 
                onClick={() => window.location.href = 'https://youtu.be/92ydUdqWE1g?si=Jmvg6nvkC370RHBc'} 
                type="button"> 
                Click me
              </button>
            </div>
          </div>
        </div>
        <div className="rowC">
          <div className="card" >
            <h3>Ocean</h3>
            <img src={ocean} className="ocean" alt="me in front of the ocean"/>
          </div>
          <div className="card">
            <h3>Card 5</h3>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              margin: 'auto', 
              backgroundColor: 'lightgray', 
              borderRadius: '50px', 
              width: "200px", 
              height: "200px"}}>
              <img src={MAILogo} className="MAI" alt="MAI Logo"/>
            </div>
          </div>
          <div className="card">
            <h3>Card 6</h3>
            <img src={eveningRide} className="eveningRide" alt="Riding Evening"/>
          </div>
        </div>
      </div>
    </div>
  )
}



export default App;