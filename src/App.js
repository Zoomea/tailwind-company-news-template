import './App.css';

import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { FaSearch } from 'react-icons/fa';
import NewsDisplay from './NewsDisplay.jsx';
import backgroundImg from './assets/island.jpg';

function App() {
  return (
    <div className="App">
      <p style={{ fontFamily: 'nolan-bold' }}>hello</p>
      {/* <img className="" src={backgroundImg} alt="island pic" /> */}
      <div className="my-background pt-12">
        <div className="w-full nav flex justify-between">
          <div className="nav-left flex ml-12">
            <HamburgerMenu />
            <a className="ml-4" href="#">menu</a>
          </div>
          <div className="nav-mid">
            <div className="flex justify-center">
              BELMONT
            </div>
            <div className="flex justify-center">
              GRANGE
            </div>
          </div>
          <div className="nav-right flex mr-12">
            <a href="#" className="mr-4">Register</a>
            <FaSearch size={20} color="white" />
          </div>
        </div>
        <div className="flex mt-16 mb-8">
          <div className="mx-auto my-auto">Latest</div>
        </div>
        <div className="flex">
          <div className="mx-auto my-auto">NEWS</div>
        </div>
      </div>
      <div className="main-content-container p-16">
        <div className="news-container pt-16 px-8 bg-white w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-4">
          {[...Array(12)].map((_, index) => (
            <NewsDisplay />
          ))}
        </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
