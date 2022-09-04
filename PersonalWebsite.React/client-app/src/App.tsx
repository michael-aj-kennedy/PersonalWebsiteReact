import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Nav } from './components/nav/Nav';
import { ImageBar } from './components/imageBar/ImageBar';
import { Header } from './components/header/Header';
import { CategoryRoute } from './components/category/CategoryRoute';
import './App.css';
import { Contact } from './components/contact/Contact';

function App() {
    return (
        <div className="mk-app">
            <ImageBar />
            <div className="mk-container">
                <Header />
                <div className="mk-content">
                    <Nav />
                    <div className="router-container">
                        <Routes>
                            <Route path="*" key="x" element={<CategoryRoute key="r1" />} />
                            <Route path="/:category/*" key="y" element={<CategoryRoute key="r2" />} />
                        </Routes>
                    </div>
                    <Contact />
                </div>
            </div>
        </div>
  );
}

export default App;
