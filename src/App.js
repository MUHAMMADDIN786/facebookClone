import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider';

function App() {
  // const [user, dispatch]= useStateValue()
  const [user, setUser] = useState({})
  useEffect(()=> {
      JSON.parse(sessionStorage.getItem("facebookuser"))!={} ? setUser(JSON.parse(sessionStorage.getItem("facebookuser"))): setUser({})
  }, [])


  return (
   
    <div className="app">
       {!user ? <Login/> :(<>
        <Header/>
      <div className='app__body'>
        <Sidebar userData={user}/>
        <Feed/>
        <Widgets/>
        
      </div>
      </>)}
     
    </div>
  );
}

export default App;
