import React from 'react';
import { Link, Routes, Route } from "react-router-dom"
import { Nav } from './components/nav/Nav';
import { ImageBar } from './components/imageBar/ImageBar';
import { Header } from './components/header/Header';
import { CategoryRoute } from './components/category/CategoryRoute';
import { Category } from './components/category/Category';
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
                            <Route path="/" element={<CategoryRoute   />} />
                            <Route path="/:category" element={<CategoryRoute />} />
                        </Routes>

                        {/*<BrowserRouter>*/}
                        {/*    <Routes>*/}
                        {/*        <Route path="/" element={<Category />} />*/}
                        {/*        <Route path="/:category" element={<Category />} />*/}
                        {/*        <Route*/}
                        {/*            path="*"*/}
                        {/*            element={*/}
                        {/*                <main style={{ padding: "1rem" }}>*/}
                        {/*                    <p>There's nothing here!</p>*/}
                        {/*                </main>*/}
                        {/*            }*/}
                        {/*        />*/}
                        {/*    </Routes>*/}
                        {/*</BrowserRouter>*/}
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
