import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style.css'

import Home from './pages/Home';
import Cardapio from './pages/Cardapio';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';

import Header from './components/Header';
import Footer from './components/Footer';

export default function RoutesApp() { 
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cardapio' element={<Cardapio />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/sobre' element={<Sobre />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}