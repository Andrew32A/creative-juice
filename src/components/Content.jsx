import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Placeholder from '../images/placeholder.jpg';

const Content = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 1500,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
      reset: false,
    });
    
    sr.reveal('.grid-wrapper img', { 
      origin: 'right', 
      interval: 200,
      delay: 400
    });    
  }, []);

  return (
  <div className="text-center mt-8 mb-3" style={{ fontFamily: 'Mogra, sans-serif'}}>
    <h1 className="text-5xl mb-8">Artwork Shared:</h1>
    <div className="m-10 shadow-md rounded-md p-10">
      <div className="grid-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
        <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 1" />
        <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 2" />
        <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 3" />
        <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 4" />
        <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 5" />
        <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 6" />
        <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 7" />
        <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 8" />
        <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 9" />
        <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 10" />
        <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 11" />
        <img className="w-full h-64 object-cover rounded-md" src={Placeholder} alt="Artwork 12" />
      </div>
    </div>
  </div>
  );
}

export default Content;