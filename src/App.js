import './App.css';

import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import NewsDisplay from './NewsDisplay';

function App() {
  return (
    <div className="App">
      <div className="my-background pt-12">
        {/* Navigation bar */}
        <div className="w-full nav flex justify-between">
          <div className="nav-left flex ml-12">
            <HamburgerMenu />
            <a className="ml-4 uppercase" href="#">menu</a>
          </div>
          <div className="nav-mid">
            <div className="flex justify-center uppercase">
              Belmont
            </div>
            <div className="flex justify-center uppercase">
              Grange
            </div>
          </div>
          <div className="nav-right flex mr-12">
            <a href="#" className="mr-4 uppercase">register</a>
            <FaSearch size={20} color="white" />
          </div>
        </div>
        <div className="flex mt-16 mb-8">
          <div className="mx-auto my-auto uppercase text-xs">Latest</div>
        </div>
        <div className="flex">
          <div className="mx-auto my-auto" style={{fontSize: "3rem"}}>NEWS</div>
        </div>
      </div>
      {/* Main content of home page */}
      <div className="main-content-container p-16">
        <div className="bg-white w-full py-8 px-8 mt-[-120px]">
          <div className="news-container w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-4">
            {[...Array(12)].map((_, index) => (
              <NewsDisplay />
            ))}
          </div>
          <div className="w-full nav-bottom flex justify-between my-8">
              <FaArrowLeft size={24} className="text-red-400 hover:text-black transition duration-300" />
              <div className="w-1/5 page-number flex justify-between">
                <div className="border text-red-400 rounded hover:border-black transition duration-300">01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
              </div>
              <FaArrowRight size={24} className="text-gray-300 hover:text-black transition duration-300" />
            </div>
        </div>
      </div>
      {/* Contact form */}
      <div className="form-container my-24">
        <div className="form flex px-24 mb-12">
          <div className="form-fields w-1/2 border-r-2 py-8">
          <input
            type="title"
            placeholder="TITLE"
            class="block mx-auto border rounded-md p-2 w-1/2 focus:outline-none focus:ring focus:border-blue-300 mb-2"
          />
          <input
            type="name"
            placeholder="NAME"
            class="block mx-auto border rounded-md p-2 w-1/2 focus:outline-none focus:ring focus:border-blue-300 mb-2"
          />
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            class="block mx-auto border rounded-md p-2 w-1/2 focus:outline-none focus:ring focus:border-blue-300 mb-2"
          />
          <input
            type="telephone"
            placeholder="TELEPHONE"
            class="block mx-auto border rounded-md p-2 w-1/2 focus:outline-none focus:ring focus:border-blue-300"
          />
          
          </div>
          <div className="form-description w-1/2 text-red-400">
            <div className="uppercase text-center mt-4 mb-8 text-xs">Updates</div>
            <div className="uppercase text-center mb-8" style={{fontSize: '2.5rem'}}>join the club</div>
            <div className="text-center">Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button class="bg-white text-red-400 border px-16 py-3 hover:bg-gray-200 transition duration-300">
            Submit
          </button>
        </div>
      </div>
      {/* Footer and info section */}
      <div className="footer-container pt-24 pb-16" style={{backgroundColor: "#26203a"}}>
        <div className="mx-auto footer-info flex w-1/2 justify-between mb-24">
          <div className="info-left text-red-400">
            <div className="grid place-items-center">Location</div>
            <div className="flex justify-center">Development</div>
            <div className="flex justify-center">Lifestyle</div>
            <div className="flex justify-center">Team</div>
          </div>
          <div className="info-mid text-red-400 flex items-center text-xl">Company Name</div>
          <div className="info-right text-red-400">
            <div className="grid place-items-center">Contact</div>
            <div className="flex justify-center">News</div>
            <div className="flex justify-center">Register</div>
            <div className="flex justify-center">Terms</div>
          </div>
        </div>
        <div className="email-holder w-3/4 mx-auto mb-8 text-red-400 border-b border-red-400 pl-4 pr-2 flex items-center justify-between">
          <div className="email-place-holder">Your email address</div>
          <FaArrowRight size={12} className="text-red-400" />
        </div>
        <div className="social-media-holder h-[30px] w-[100px] bg-red-100 mx-auto"></div>
      </div>
    </div>
  );
}

export default App;
