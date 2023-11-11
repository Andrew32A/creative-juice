import React from 'react';

const About = () => {
  return (
    <div style={{ fontFamily: 'Mogra, sans-serif', backgroundColor: '#f1f1f1' }}>
      {/* cards */}
      <div className="flex justify-center overflow-x-auto p-4">
        {/* card 1 */}
        <div className="bg-gray-300 p-6 m-2 rounded-2xl" style={{ width: '350px', height: '330px' }}>
          <h2 className="text-xl font-bold mb-2 text-pink-400">Is This For Newbies?</h2>
          <p className="text-green-600">This is for everybody who likes to write! Take whatever part of the prompt feels most 
            exciting and doable to you. Try a prompt like "Write about a friendship where one person's 
            out the door and the other has no idea" and see where it takes you. Our goal is for it to 
            feel good, fun, and inspiring.</p>
        </div>

        {/* card 2 (middle) */}
        <div className="bg-gray-300 p-6 m-2 rounded-2xl" style={{ width: '350px', height: '370px' }}>
          <h2 className="text-2xl font-bold mb-2 text-pink-400">What Is Creative Juice? </h2>
          <p className="text-green-600">Creating feels awesome. And, it takes courage and inspiration! Creative blocks are real and 
            make it easy to give up. Begone, creative blocks! The vision of Creative Juice is to inspire and 
            support creativity through community.
            Together, we will develop a habit of daily creative practice, which changes how we see ourselves 
            and the world around us in beautiful and surprising ways. We hope you'll join our community!</p>
        </div>

        {/* card 3 */}
        <div className="bg-gray-300 p-6 m-2 rounded-2xl" style={{ width: '350px', height: '330px' }}>
          <h2 className="text-xl font-bold mb-2 text-pink-400">How Does It Work?</h2>
          <p className="text-green-600">It's super simple. You get one email a day with a prompt. 
            Reply with whatever you write, and you'll get to see the pieces other writers created 
            for that prompt (likewise, they'd get to see yours)! All the writing is anonymous.</p>
        </div>
      </div>
      {/* end card section */}
    </div>
  );
}

export default About;