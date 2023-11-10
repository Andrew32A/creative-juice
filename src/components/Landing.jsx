import React from "react";
// import Placeholder from '../assets/placeholder.jpg'
import Logo from '../images/cj-logo.jpg';

const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-[#f1f1f1]">

      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">

        <div className="flex flex-col sm:flex-row justify-between items-center">
        <div style={{ fontFamily: 'Mogra, sans-serif' }}>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#003000]">Creative Juice!</h1>
            <p className="text-[#8892b0] py-4 max-w-[700px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Deleniti at officiis quos inventore unde optio dicta facilis consequatur? Accusantium perspiciatis deserunt 
            impedit illum dolores unde aut provident itaque corrupti dolor.</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              className="border-2 px-4 py-2 my-1 rounded-md"
              placeholder="Enter Email Here"/>
            <button className="text-black group border-2 px-4 py-2 my-1 flex items-center hover:bg-[#a8e6cf] hover:border-[#ffaaa5] rounded-md">Get The Juice!</button>
            </div>
            <div className="flex justify-between space-x-4 font-mogra px-3 mt-4">
              <h2>27 M</h2>
              <h2>44 K</h2>
              <h2>2M+</h2>
            </div>
            <div className="flex justify-between space-x-4 font-mogra">
              <h2>Inspiration</h2>
              <h2>Collections</h2>
              <h2>Creatives</h2>
            </div>
          </div>
          {/* <div>
          <img className="w-[350px] mx-auto mt-2 px-3" src={Placeholder} alt="/" aria-label="placeholder image" />
          </div> */}
          <div>
          <img className="w-[350px] mx-auto mt-1 ml-3" src={Logo} alt="/" aria-label="placeholder image" />
          </div>          
        </div>
        <div style={{ textAlign: 'center', fontFamily: 'Mogra, sans-serif', marginTop: '50px' }}>
            <h2>See What Juicers Made!</h2>
            <h3>Share What You Created to Unlock Access.</h3>
            <h3>All Art is Anonymous!</h3>
        </div>
        </div>
        </div>
  )
}

export default Home;