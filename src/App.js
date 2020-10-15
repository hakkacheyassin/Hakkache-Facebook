import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Fed from './Fed';
import Wigtes from './Wigtes';
import Login from './Login';

function App() {
const user = null;

  return (
    <div className="App">

      {!user ? (
      
      <Login/> ): (
      <> 
      <Header/>
      <div className="app__body">
      <Sidebar/>
      <Fed/>
      <Wigtes/>
      </div>
      </>
      )}
      
    </div>
  );
}

export default App;
 