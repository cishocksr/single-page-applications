import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <h1 className='store-header'>Chris's Trinkets</h1>
        <div className='nav-links' />>
      </nav>
    </div>
  );
}

//Here we will use Router as our Base component that will wrap our entire app. We'll do this by wrapping our <App /> component that we pass to ReactDOM render.

export default App;
