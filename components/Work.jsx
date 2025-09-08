import React from "react";
import { workData } from "@/assets/data";
import Image from "next/image";
import { assets } from "@/assets/assets";

import PropTypes from "prop-types";

const Work = ({ isDarkMode }) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portofolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quod.Et harum, quas, eaque, exercitationem exercitationem harum, quas,
        eaque, exercitationem
      </p>
      <div className="grid grid-cols-auto gap-6 my-10">
        {workData.map((project, index) => (
          <div
            className="aspect-square bg-no-repeat bg-cover bg-center  relative rounded-lg p-4 flex flex-col justify-between hover:shadow-black hover:translate-x-1 hover:translate-y-1 transition-all duration-200 cursor-pointer"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between 
            transition-all 
             duration-500 group-hover:bottom-7">
              <div className="m-2">
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
                
              </div>
            </div>

            <div className="border rounded-full border-black w-9
            aspect-square flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-lime-300 transition">
              <Image src={assets.send_icon} alt="" className="w-5" />
            </div>
          </div>
        ))}
      </div>

      <a href=""
      className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3
      px-10 mx-auto my-20 hover:bg-lightHover duration-500">Show More <Image src={assets.right_arrow_bold} alt='Right arrow' 
      className="w-4"/></a>
    </div>
  );
};


Work.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Work;
