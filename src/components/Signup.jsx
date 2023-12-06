import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../images/updated-logo.jpg';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/accounts/register', {
        username,
        email,
        password,
      });
      if (response.status === 201) {
        console.log('Signup successful');

        const loginResponse = await axios.post('http://localhost:3000/api/accounts/login', {
          identifier: username,
          password,
        });

        if (loginResponse.status === 200) {
          const authToken = loginResponse.data.token;
          localStorage.setItem('authToken', authToken);
          window.location.href = '/prompt';
        }
      }
    } catch (error) {
      console.error('Signup error:', error);
      if (error.response) {
        console.error('Server response:', error.response.data);
      }
    }    
  };

  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#F2E2C4' }} className="w-full h-screen bg-[#F2E2C4]">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="w-[3em] mx-auto" src={Logo} alt="Creative Juice Logo" />
          <h1 style={{ fontFamily: 'DM Sans, sans-serif' }} className="mt-10 text-center text-4xl leading-9 tracking-tight drop-shadow-2xl font-bold text-[#3f3f3f]">Create an Account to Start Juicing!</h1>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSignup}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900"></label>
              <div className="mt-2">
                <input 
                  id="username" 
                  name="username" 
                  type="text" 
                  placeholder='  Username'
                  autoComplete="username" 
                  required 
                  className="border-[#003000] border block w-full p-1.5 text-[#3f3f3f] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#3f3f3f]"></label>
              <div className="mt-2">
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder='  Email Address'
                  autoComplete="email" 
                  required 
                  className="border-[#003000] border block w-full p-1.5 text-[#3f3f3f] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900"></label>
              </div>
              <div className="mt-2">
                <input 
                  id="password" 
                  name="password" 
                  type="password" 
                  placeholder='  Password'
                  autoComplete="current-password" 
                  required 
                  className="border-[#003000] border block w-full p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button 
                type="submit" 
                className="w-full flex justify-center items-center border-[#003000] border-2 px-4 py-2 my-1 text-black bg-[#BBF2E2] hover:bg-[#F2A7CA] transition duration-300 ease-in-out"
              >
                Create Account
              </button>
              <div
            className="mt-10 text-center text-sm text-gray-500"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <span className="text-sm text-gray-500">
              Already a member?{' '}
            </span>
            <Link to="/login" className="nav-link ml-1 text-black transition duration-300 ease-in-out">
              <span style={{ fontWeight: 'bold' }}>Log In</span>
            </Link>
          </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
