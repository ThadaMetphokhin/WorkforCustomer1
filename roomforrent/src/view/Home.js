//import logo from './logo.svg';
//import { Routes, Route } from "react-router-dom";
//import './App.css';
import Container from "react-bootstrap/Container";
import Navbar from "./Navbar";

//import Component DataListroom
import DataRoom from '../Component/Datalistroom'


import SetFooter from "./Footer";

function App() {
    return (
      <>
        <Navbar />
        <br></br>
        <Container>
          <DataRoom/>
          
        </Container>
        <SetFooter/>
      </>
    );
  
  
}

export default App;
