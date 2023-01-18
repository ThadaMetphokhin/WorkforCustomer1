//import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import NotFound from './view/NotFound'
import About from './view/About'
import Information from './view/Informationofroom'
import Borrow from "./view/Borrow";
import Home from "./view/Home.js";
import './App.css';



function Main() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Information" element={<Information />} />
      <Route path="/Borrowitems" element={<Borrow />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Main;
