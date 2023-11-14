import React from 'react';
import Placeholder from '../assets/placeholder.jpg'

const Login = () => {
    return (
    <div style={{ fontFamily: 'Mogra, sans-serif', backgroundColor: '#f1f1f1' }}>
    <div className="flex items-center justify-center h-screen">
    <div>
    <img className="w-[350px] mx-auto mt-1 ml-3" src={Placeholder} alt="/" aria-label="placeholder image" />
    </div> 
      <div className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              placeholder="Your email"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              placeholder="Your password"/>
          </div>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none hover:bg-yellow-300"
            type="button">Login
          </button>
          <button
            className="bg-blue-500 text-white font-bold py-2 mx-4 px-4 rounded-md focus:outline-none hover:bg-yellow-300"
            type="button">Create Account
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;