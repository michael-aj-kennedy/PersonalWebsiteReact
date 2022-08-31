import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Nav } from './components/nav/Nav';
import { ImageBar } from './components/imageBar/ImageBar';
import { Header } from './components/header/Header';
import { CategoryRoute } from './components/category/CategoryRoute';
import './App.css';

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
                            <Route path="/" element={<CategoryRoute />} />
                            <Route path="/:category" element={<CategoryRoute />} />
                            <Route path="/:category/:id" element={<CategoryRoute />} />

                            <Route path="/About" element={<CategoryRoute />} />
                            <Route path="/Blog/Entry/:category" element={<CategoryRoute />} />
                            <Route path="/articles/blog/:category" element={<CategoryRoute />} />
                            <Route path="/articles/cv/:category" element={<CategoryRoute />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
