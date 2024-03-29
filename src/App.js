import './App.css';

import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { FaSearch, FaArrowLeft, FaArrowRight, FaInstagram, FaYoutube, FaLinkedin, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';
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
          <div className="nav-mid translate-x-3">
            <div className="flex justify-center uppercase">
              Liberté
            </div>
            <div className="flex justify-center uppercase">
              Créative
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
          <div className="mx-auto my-auto" style={{ fontSize: "3rem" }}>NEWS</div>
        </div>
      </div>
      {/* Main content of home page */}
      <div className="main-content-container p-16">
        <div className="bg-white w-full py-8 px-8 mt-[-140px]">
          <div className="news-container w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-4">
            {[...Array(12)].map((_, index) => (
              <NewsDisplay />
            ))}
          </div>
          <div className="w-full nav-bottom flex justify-between my-8">
            <FaArrowLeft size={24} className="text-red-400 hover:text-black transition duration-300" />
            <div className="w-1/5 page-number flex justify-between">
              <div className="px-2 py-1 border border-transparent text-red-400 rounded hover:border-red-400 transition duration-300">1</div>
              <div className="px-2 py-1 border border-transparent rounded hover:text-red-400 hover:border-red-400 transition duration-200">2</div>
              <div className="px-2 py-1 border border-transparent rounded hover:text-red-400 hover:border-red-400 transition duration-200">3</div>
              <div className="px-2 py-1 border border-transparent rounded hover:text-red-400 hover:border-red-400 transition duration-200">4</div>
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
              class="block mx-auto border rounded-md p-2 w-1/2 focus:outline-none focus:ring focus:border-blue-300 mb-2"
            />
            <input
              type="location"
              placeholder="LOCATION"
              class="block mx-auto border rounded-md p-2 w-1/2 focus:outline-none focus:ring focus:border-blue-300"
            />  
          </div>
          <div className="form-description w-1/2 text-red-400">
            <div className="uppercase text-center mt-4 mb-8 text-xs">Updates</div>
            <div className="uppercase text-center mb-8" style={{ fontSize: '2.5rem' }}>join the club</div>
            <div className="text-center">La communauté des freelancers : partage de compétences, collaboration sur des projets passionnants. Rejoignez-nous pour échanger des idées et découvrir de nouvelles opportunités professionnelles.</div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button class="bg-white text-red-400 border px-16 py-3 hover:bg-gray-200 transition duration-300">
            Submit
          </button>
        </div>
      </div>
      {/* Footer and info section */}
      <div className="footer-container pt-24 pb-16" style={{ backgroundColor: "#114232" }}>
        <div className="mx-auto footer-info flex w-1/2 justify-between mb-24">
          <div className="info-left text-red-400">
            <div className="grid place-items-center">About</div>
            <div className="flex justify-center">Services</div>
            <div className="flex justify-center">Locations</div>
            <div className="flex justify-center">Blogs</div>
          </div>
          <div className="info-mid text-red-400 flex items-center text-xl">Liberté Créative</div>
          <div className="info-right text-red-400">
            <div className="grid place-items-center">Contact</div>
            <div className="flex justify-center">News</div>
            <div className="flex justify-center">Partners</div>
            <div className="flex justify-center">Careers</div>
          </div>
        </div>
        <div className="email-holder w-3/4 mx-auto mb-16 text-red-400 border-b border-red-400 pl-4 pr-2 flex items-center justify-between">
          <div className="email-place-holder">Your email address</div>
          <FaArrowRight size={12} className="text-red-400" />
        </div>
        <div className="social-media-holder w-1/5 mx-auto flex justify-between">
          <FaInstagram size={24} color="#E4405F" />
          <FaYoutube size={24} color="#FF0000" />
          <FaLinkedin size={24} color="#0077B5" />
          <FaFacebook size={24} color="#1877F2" />
          <FaTwitter size={24} color="#1DA1F2" />
          <FaTiktok size={24} color="#69C9D0" />
        </div>
      </div>
    </div>
  );
}

export default App;
