import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import bootstrap from './assets/bootstrap.svg'
import patrickStar from "./assets/Pat_has_been_shooketh_2.jpeg";
import background1 from "./assets/2034232.jpeg";

import './App.css'
import Message from './Message';
import ListGroup from './Components/ListGroup';

function toggleDropdown() {
  var dropdownMenu = document.getElementById("dropdown-menu");
  if (dropdownMenu) {
    dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //const [name, setName] = useState('')
  
  return (
    <div style={{ backgroundImage: `url(${background1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", 
    backgroundPosition: "center"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="./">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isDropdownOpen} aria-label="Toggle navigation" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="./">Home <span className="sr-only">(current)</span></a>
            </li>

            <div className="dropdown">
            <button className="dropdown-toggle" type="button" onClick={toggleDropdown}>Dropdown</button>
              <div id="dropdown-menu" className="dropdown-menu">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            </div>

            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <div className="container" style={{ backgroundColor: 'midnightblue', borderRadius: '15px'}}>
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
      
      <div>
        <a>
          <img src={patrickStar} width={250} height={250} style={{ borderRadius: '50px'}} 
          className='Patrick Star' alt="Patrick"/>
        </a>
      </div>
      
      <div className="container" style={{ backgroundColor: 'red', borderRadius: '15px'}}>
        <div><Message /></div>
        <div style={{ marginBottom: '15px'}}>
          <button style={{ borderRadius: '15px' }} onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          
        </div>
        <div className="card"> <ListGroup /> </div>
      </div>
    </div>
  )
}



export default App
