import { Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import BookDetails from '../components/BookDetails';
import Section from '../components/Section';

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element = {< Home />} />
        <Route path='/books/section/:cat' element = {< Section />} />
        <Route path='/books/:id' element = {< BookDetails />} />
      </Routes>
    </>
  );
};
