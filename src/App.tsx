import React from 'react';
import './App.css';
import HelloWorld from './pages/hello-world/hello-world';

const App: React.FC = () => {
    return (
        <div className="App">
            <HelloWorld name="Merlin" age={18} >
                ha ha ha
            </HelloWorld>
        </div>
    );
}

export default App;
