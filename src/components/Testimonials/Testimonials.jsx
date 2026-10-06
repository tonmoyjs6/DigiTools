import React from "react";
import user from "../../assets/user.png";
import product from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

const Testimonials = () => {
  const values = [
    { id: 1, heading: "create Account", img: user },
    { id: 2, heading: "choose products", img: product },
    { id: 3, heading: "start creating", img: rocket },
  ];
  return (
    <div className="mt-10">
      <div className="text-center">
        <h2 className="font-extrabold text-6xl">Get Started in 3 Steps</h2>
        <p className="mt-2">Start using premium digital tools in minutes, not hours.</p>
      </div>

      <div className="flex justify-center">
        {values.map((val) => (          
          <div className="card border-sky-100 w-96 ">
            <div className="card-body">
                <img src={val.img} className="w-32" alt="" srcset="" />
              <h2 className="card-title">{val.heading}</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
