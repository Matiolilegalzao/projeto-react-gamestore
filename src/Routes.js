import React from 'react';
import './App.css';
import LojaPage from './Pages/Loja';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoriasPage from './Pages/Categorias';
import BibliotecaPage from './Pages/Biblioteca';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/loja' element={<LojaPage/>}></Route>
        <Route path='/categorias' element={<CategoriasPage/>}></Route>
        <Route path='/biblioteca' element={<BibliotecaPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
