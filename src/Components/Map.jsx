import React from "react";

const Map = () => {
  return (
    <div className="pad sb-flex map">
      <div className="img">
        <img src="images/map.png" alt="Map" width="400px" />
      </div>
      <div className="left-wrap-flex gp-20">
        <h1>Forest, Starry Night, Campfire, What Else Do You Need?</h1>
        <p>
          Try a variety of options when using our services Try a variety of
          options when using our services
        </p>
        <div className="down sb-flex">
          <div className="all-flex gp-10">
            <img src="/icons/location.svg" alt="Location" />
            <div>
              <h4>Location</h4>
              <p>Add Location</p>
            </div>
          </div>
          <div className="all-flex gp-10">
            <img src="/icons/location.svg" alt="Date" />
            <div>
              <h4>Date</h4>
              <p>Add Date</p>
            </div>
          </div>
          <img src="/icons/search.svg" alt="Search" />
        </div>
      </div>
    </div>
  );
};

export default Map;
