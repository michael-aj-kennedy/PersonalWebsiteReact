import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Nav } from './components/nav/Nav';
import { ImageBar } from './components/imageBar/ImageBar';
import { Header } from './components/header/Header';
import { Articles } from './components/articles/Articles';
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
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Articles />} />
                                <Route path="/:category" element={<Articles />} />
                                <Route
                                    path="*"
                                    element={
                                        <main style={{ padding: "1rem" }}>
                                            <p>There's nothing here!</p>
                                        </main>
                                    }
                                />
                            </Routes>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
