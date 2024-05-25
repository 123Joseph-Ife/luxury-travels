import React from "react";

export const Travel = () => {
  return (
    <div className="travel pad sb-flex gp-20">
      <div className="wrap-flex gp-10 div">
        <h1>Travel Everywhere</h1>
        <p>Try a variety of options when using our service.</p>
      </div>
      <div className="left-wrap-flex gp-10 div">
        <div>
          <img src="/icons/train.svg" alt="Train" />
          <h2>Go by Train.</h2>
        </div>
        <p>Try a variety of options when using our service.</p>
      </div>
      <div className="left-wrap-flex gp-10 div">
        <div>
          <img src="/icons/plane.svg" alt="Plane" />
          <h2>Go by Air.</h2>
        </div>
        <p>Try a variety of options when using our service.</p>
      </div>
      <div className="left-wrap-flex gp-10 div">
        <div>
          <img src="/icons/hotels.svg" alt="Hotel" />
          <h2>Hotel Bookings.</h2>
        </div>
        <p>Try a variety of options when using our service.</p>
      </div>
    </div>
  );
};
