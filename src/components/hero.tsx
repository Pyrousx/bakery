import React from "react";

// import doughnut2 from "../img/doughnut2.jpg";
// import doughnut from "../img/doughnut.jpg";

const Hero = () => {
  return (
    <>
      {/* <img
        src="../img/doughnut2.jpg"
        alt="Your Image"
        className="h-auto max-w-full"
      /> */}

      {/* <div className="z-0 h-screen w-screen max-w-full bg-[url('./img/doughnut2.jpg')] bg-contain bg-no-repeat object-contain "> */}
      <div className=" inline-block">
        <img src={require("../img/doughnut2.jpg")}></img>
        <div className=" relative -top-[83rem] left-[13rem] font-serif text-8xl leading-snug  ">
          Charlies Bakes
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Hero;
