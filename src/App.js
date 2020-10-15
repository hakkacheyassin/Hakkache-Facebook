import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Fed from './Fed';
import Wigtes from './Wigtes';
import Login from './Login';
import {useStateValue} from './Stateprovider';


function App() {

  const [{ user }, dispatch] = useStateValue()
  
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
 