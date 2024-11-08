import React, { useState } from 'react';
import './App.css';

function App() {
    const [message, setMessage] = useState('');

    const showMessage = () => {
        setMessage("Hello! You've clicked the button.");
    };

    return (
        <div className="App">
            <h1>Welcome to My Simple React Website!</h1>
            <p>This is a simple React website to display a message.</p>
            <button onClick={showMessage}>Click Me</button>
            <p>{message}</p>
        </div>
    );
}

export default App;
