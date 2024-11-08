import React, { useState } from 'react';
import './App.css';

function App() {
    const [message, setMessage] = useState('');

    const showMessage = () => {
        setMessage("Every day with you is my favorite. You're my forever ❤️");
    };

    return (
        <div className="App">
            <h1>For My One and Only</h1>
            <p>A little message to remind you of my love.</p>
            <button onClick={showMessage}>Reveal My Heart</button>
            <p className="message">{message}</p>
        </div>
    );
}

export default App;
