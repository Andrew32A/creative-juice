import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import prompts from "./experimental-prompts.json";

const Prompt = () => {
  const [dailyPrompt, setDailyPrompt] = useState({
    base: "",
    stretch: "",
  });

  useEffect(() => {
    const sr = ScrollReveal({
      reset: false,
    });

    sr.reveal("p", {
      origin: "left",
      interval: 200,
      delay: 400,
    });

    sr.reveal(".submit-button-wrapper", {
      origin: "left",
      interval: 0,
      delay: 1000,
    });

    const fetchDailyPrompt = () => {
      try {
        const randomPrompt =
        prompts.prompts[Math.floor(Math.random() * prompts.prompts.length)];
        setDailyPrompt(randomPrompt);
      } catch (error) {
        console.error("Error fetching daily prompt:", error);
      }
    };

    fetchDailyPrompt();
  }, []);

  return (
    <>
      <div
        name="home"
        className="w-full h-screen bg-[#F2E2C4] flex justify-center items-center"
      >
        <div className="max-w-[1000px] px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div style={{}}>
              <h1
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  WebkitTextStroke: "1px #bbf2e2",
                  textStroke: "1px #bbf2e2",
                }}
                className="text-4xl sm:text-6xl drop-shadow-2xl font-bold text-[#3f3f3f]"
              >
                Welcome, Juicer!
              </h1>

              <p className="text-[#3f3f3f] py-4 max-w-[700px]">
                Here is your Creative Juice of the day. Share your drawing in
                order to see what other artists created today. Your drawing will
                be entirely anonymous.
              </p>
              <div style={{ border: "0.5px solid #3f3f3f" }}></div>
              <h2
                className="mt-5"
                style={{ fontWeight: "bold", fontSize: "17px" }}
              >
                Play 🎉
              </h2>
              <p className="text-[#3f3f3f]">{dailyPrompt.base}</p>
              <h2
                className="mt-5"
                style={{ fontWeight: "bold", fontSize: "17px" }}
              >
                Do Something ⭐️
              </h2>
              <p className="mb-5 text-[#3f3f3f]">{dailyPrompt.stretch}</p>
              <div style={{ border: "0.5px solid #3f3f3f" }}></div>
              <div
                className="submit-button-wrapper"
                style={{ display: "flex", alignItems: "center" }}
              >
                <button className="text-black group border-[#003000] border-2 px-4 py-2 my-1 ml-[-2px] mt-5 flex items-center bg-[#BBF2E2] hover:bg-[#F2A7CA] transition duration-300 ease-in-out z-20">
                  <span>Submit Your Art</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prompt;
