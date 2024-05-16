import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import bootstrap from './assets/bootstrap.svg'
import './App.css'
import Message from './Message';
import ListGroup from './Components/ListGroup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
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
      
      <h1>Vite + React + Bootstrap</h1>
      <div><Message /></div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div> <ListGroup /> </div>
    </>
  )
}

export default App
