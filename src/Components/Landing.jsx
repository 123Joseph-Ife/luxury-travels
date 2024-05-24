import React from "react";

const Landing = () => {
  return (
    <main className="sb-flex pad">
      <div className="left-wrap-flex gp-30">
        <h1 className="big-font">Embark on Your <br />Next Adventure</h1>
        <p className="big-text">
          Now you can enjoy camping 
          anywhere and anytime and off<br /> 
          course it's safe with us.
        </p>
        <button className="theme-background white">Get Started</button>
      </div>
      <div>
        <img src="/images/mobile.png" alt="Mobile Phones" />
      </div>
    </main>
  );
};

export default Landing;
