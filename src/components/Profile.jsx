import React from 'react';
import Placeholder from '../assets/placeholder.jpg';

const Profile = () => {
  return (
    <div style={{ fontFamily: 'Mogra, sans-serif', backgroundColor: '#f1f1f1' }}>
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Username</h2>
        <div className="flex items-center space-x-4 mb-6">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src={Placeholder}
            alt="Profile"
          />
          <div>
            <h3 className="text-lg font-bold">Lorem Ipsum</h3>
            <p className="text-gray-500">lorem.ipsum@loremipsum.com</p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">About Me</h4>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nec fermentum ligula. Nullam vel velit et arcu pharetra tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nec fermentum ligula. Nullam vel velit et arcu pharetra tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nec fermentum ligula. Nullam vel velit et arcu pharetra tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nec fermentum ligula. Nullam vel velit et arcu pharetra tristique.
          </p>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center h-screen flex-col text-center">
  <h1 className='text-5xl mb-6'>Artwork Shared:</h1>
  <div className="flex flex-wrap justify-center bg-[#f1f1f1]">
    <div className="flex space-x-4 mb-3 pb-2">
      <img className="" style={{ width: '350px', height: '360px' }} src={Placeholder} alt="/" aria-label="placeholder image" />
      <img className="" style={{ width: '350px', height: '360px' }} src={Placeholder} alt="/" aria-label="placeholder image" />
    </div>
    <div className="flex space-x-4">
      <img className="" style={{ width: '350px', height: '360px' }} src={Placeholder} alt="/" aria-label="placeholder image" />
      <img className="" style={{ width: '350px', height: '360px' }} src={Placeholder} alt="/" aria-label="placeholder image" />
    </div>
  </div>
</div>
</div>
  );
}

export default Profile;