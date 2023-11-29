import React from 'react';
import './App.css';
import LojaPage from './Pages/Loja';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoriasPage from './Pages/Categorias';
import BibliotecaPage from './Pages/Biblioteca';
import RegistroPage from './Pages/Registro';
import Re4Remake from './GamesPage/re4';
import Fifa24 from './GamesPage/fifa24';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/loja' element={<LojaPage/>}></Route>
        <Route path='/categorias' element={<CategoriasPage/>}></Route>
        <Route path='/biblioteca' element={<BibliotecaPage/>}></Route>
        <Route path='/registro' element={<RegistroPage/>}></Route>
        <Route path='/loja/resident-evil-4-remake' element={<Re4Remake/>}></Route>
        <Route path='/loja/ea-sports-fc-24' element={<Fifa24/>}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
