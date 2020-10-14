import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Fed from './Fed';
import Wigtes from './Wigtes';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app__body">
      <Sidebar/>
      <Fed/>
      <Wigtes/>
      </div>
    </div>
  );
}

export default App;
 