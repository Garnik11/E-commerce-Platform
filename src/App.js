import Header from "./Header"
import './App.css';
import {Routes, Route  } from "react-router-dom";
import  Home  from "./Home";
import  Shop  from "./Shop";
import  Team  from "./Team";
import Main from "./Main"


export default function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Header/>
        <Main />
        
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/shop' element = {<Shop/>} />
          <Route path = '/team' element = {<Team/>} />

        </Routes>

      </header>
    </div>
  );
}

