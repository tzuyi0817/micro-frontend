import React from 'react';
import logo from './logo.svg';
import './App.css';

function App({ msg }: { msg?: string }) {
  return (
    <div className="App">
      {msg && <p>{msg}</p>}
      This is react component
    </div>
  );
}

export default App;
