import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

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
    <div className="text-left mt-8 mb-3" style={{ fontFamily: 'DM Sans, sans-serif'}}>
     
     <div className='xl:w-1/2 xl:ml-80 p-5'>
      
        <h2 className="text-2xl font-bold m-10 text-[#3f3f3f]">Is This For Newbies?</h2>
        <p className="text-[#3f3f3f] ml-10">This is for everybody who likes to make art! 
        Take whatever part of the prompt feels most exciting and doable to you.  If it's something like, 
        "Draw an astronaut in a garden of alien mushrooms", maybe you just draw some neat mushrooms. Our goal is for it to feel good, fun, and inspiring.</p>     

      <h2 className="text-2xl font-bold m-10 text-[#3f3f3f]">What Is Creative Juice? </h2>
      <p className="text-[#3f3f3f] ml-10">
        Creating feels awesome. And, it takes courage and inspiration! 
        Creative blocks are real and make it easy to give up. 
        Begone, creative blocks! The vision of Creative Juice is to inspire and support creativity through community. 
        Together, we will develop a habit of daily creative practice, which changes how we see ourselves and the world around us in beautiful and surprising ways.
        We hope you'll join our community!
      </p>
      
        <h2 className="text-2xl font-bold m-10 text-[#3f3f3f]">What Are The Deets?</h2>
        <p className="text-[#3f3f3f] mb-3 ml-10">It's super simple. You'll get a new simple prompt and a more detailed one every day. You get to choose which you do that day. Submit whatever you draw, and you'll get to see the drawings other artists created for that prompt (likewise, they'd get to see yours)! All the drawings are anonymous.</p>
     
      </div>
    </div>
  );
}

export default Content;
