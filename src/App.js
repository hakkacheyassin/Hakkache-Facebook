import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Fed from './Fed';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app__body">
      <Sidebar/>
      <Fed/>
      </div>
    </div>
  );
}

export default App;
 