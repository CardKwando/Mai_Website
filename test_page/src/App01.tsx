import React from 'react';

import '/src/App.css'

function App01() {

    return (
        <div>    
            <div className="App">
                <h1>test page</h1>
            </div>
            <div>
                <h1 >cheese Greater</h1>
            </div>
            <button className="button" onClick={() => {window.location.href = "/Mai_Website"}}>
                Home
            </button>
        </div>
    );
}

export default App01;