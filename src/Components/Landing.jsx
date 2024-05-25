import React from "react";

const Landing = () => {
  return (
    <main className="sb-flex pad landing">
      <div className="left-wrap-flex gp-30">
        <h1 className="big-font">Embark on Your <br />Next Adventure</h1>
        <p className="big-text">
          Now you can enjoy camping 
          anywhere and anytime and off<br /> 
          course it's safe with us.
        </p>
        <button className="theme-background white">Get Started</button>
      </div>
      <picture>
        <source
            srcSet="/images/responsive-mobile.png"
            media="(max-width: 550px)"
        />
        <img src="/images/mobile.png" alt="Mobile Phones" />
      </picture>
    </main>
  );
};

export default Landing;
