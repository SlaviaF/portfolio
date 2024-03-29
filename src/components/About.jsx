import React from "react";

const About = () => {
  return (
    <div name="about" className="py-20 w-full h-screen bg-[#04181a] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 pl-4">
          <div class="sm:text-right pb-8">
            <p className="text-3xl font-bold inline border-b-4 border-yellow-700">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold ">
            <p>Hi. I'm Slavia. Nice to meet you. Please take a look around </p>
          </div>
          <div>
            <p>A passionate web developer with experience in Svelte and ReactJS frameworks  with a flair in User Experience. 
                </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
