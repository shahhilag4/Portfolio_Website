import React from 'react';
import NavMenu from './components/NavMenu';
import {BrowserRouter as Router,Outlet,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App()
{
  return(
    <>
    <Router>
      <NavMenu /> 
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Outlet />
    </Router>
    </>
  );
}