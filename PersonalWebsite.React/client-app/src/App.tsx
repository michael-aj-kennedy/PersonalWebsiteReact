import React from 'react';
import { Nav } from './components/Nav';
import { ImageBar } from './components/ImageBar';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="mk-app">
            <ImageBar />
            <div className="mk-container">
                <header className="mk-header">
                    header
                </header>
                <div className="mk-content">
                    <nav>
                        nav
                    </nav>
                    <article>
                        article
                    </article>
                </div>
            </div>

            <header className="App-header">
                <Nav></Nav>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
  );
}

export default App;
