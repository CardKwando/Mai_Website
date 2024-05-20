import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import bootstrap from './assets/bootstrap.svg'
import patrickStar from "./assets/Pat_has_been_shooketh_2.jpeg";
import background1 from "./assets/2034232.jpeg";

import './App.css'
import Message from './Message';
import ListGroup from './Components/ListGroup';


function App() {
  const [count, setCount] = useState(0)
  //const [name, setName] = useState('')
  
  return (
    <div style={{ backgroundImage: `url(${background1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", 
    backgroundPosition: "center"}}>
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
