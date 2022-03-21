// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import Section from './components/Section';

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      < Navbar />
      <Routes>
        <Route path='/' element = {< Home />} />
        <Route path='/books/section/:cat' element = {< Section />} />
        <Route path='/books/:id' element = {< BookDetails />} />

      </Routes>
    </div>
  );
}

export default App;
