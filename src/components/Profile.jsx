import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Placeholder from '../images/placeholder.jpg';

const Profile = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '60px',
      duration: 1500,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
      reset: false,
    });

    sr.reveal('.artwork-grid img', {
      origin: 'right',
      interval: 200,
      delay: 400,
    });
  }, []);

  return (
    <div style={{ fontFamily: 'Mogra, sans-serif', backgroundColor: '#F2E2C4' }}>
    <div className="flex items-center justify-center h-screen m-10">
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

      {/* Artwork Shared */}
      <div className="text-center mt-8 mb-3">
        <h1 className="text-5xl mb-8">Artwork Shared:</h1>
        <div className="bg-[#f1f1f1] m-10 shadow-md rounded-md p-10 artwork-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
            <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 1" />
            <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 2" />
            <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 3" />
            <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 4" />
            <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 5" />
            <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 6" />
            <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 7" />
            <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;