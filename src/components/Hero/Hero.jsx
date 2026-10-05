import { Dot } from "lucide-react";
import React from "react";
import heroImg from "../../assets/banner.png"

const Hero = () => {
  return (
    <div className=" max-w-[1200px] mx-auto flex justify-between">
      {/* left section */}
      <div className="w-[50%]">

        <div className="badge badge-soft badge-primary mt-10">
          {" "}
          <Dot></Dot> New: AI-Powered Tools Available
        </div>

        <h1 className="font-extrabold text-6xl mt-10">
          Supercharge Your Digital Workflow
        </h1>
        <p className="mt-10">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>

        <div className="mt-5">
           <button className="btn btn-primary">Explore Product</button>

            <button className="btn btn-soft btn-primary ml-4">watch demo</button>

        </div>
      </div>

      
      <div className="mt-5">
            <img src={heroImg} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Hero;
