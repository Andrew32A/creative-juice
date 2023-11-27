import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/cj-logo.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://creative-juice.vercel.app/api/accounts/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.status === 200) {
        console.log('Login successful');
        const responseData = await response.json();
        const authToken = responseData.token;

        localStorage.setItem('authToken', authToken);
        window.location.href = '/';
      } else {
        console.error('Login error');
      }
    } catch (error) {
      console.error('Login error', error);
    }
  };

  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#F2E2C4' }} className="w-full h-screen bg-[#F2E2C4]">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="w-[3em] mx-auto" src={Logo} alt="Creative Juice Logo" />
          <h1 style={{ fontFamily: 'Mogra, sans-serif', WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: '#161616' }} className="mt-10 text-center text-4xl leading-9 tracking-tight drop-shadow-2xl font-bold text-[#f2a7ca]">Sign in to your account</h1>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                  <p className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</p>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                Sign in
              </button>
            </div>
          </form>

          <div
            className="mt-10 text-center text-sm text-gray-500"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <span className="text-sm text-gray-500">
              Not a member?{' '}
            </span>
            <Link to="/signup" className="nav-link text-black border-[#003000] border-2 px-4 py-1 ml-2 inline-flex items-center justify-center bg-[#BBF2E2] hover:bg-[#F2A7CA] transition duration-300 ease-in-out">
              <span className="">Sign up now!</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
