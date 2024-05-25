import React from "react";

const CustomerCard = () => {
  return (
    <div className="customer-card">
      <img src="icons/quote.svg" alt="quote" />
      <p>
        “I think this is the best camping service i have ever tried and i
        recommend it to you”
      </p>
      <div className="left-flex">
        <img src="icons/customer.svg" alt="Customer" />
        <div>
            <h4>Olamide Alo</h4>
            <p>Traveler</p>
            <img src="icons/stars.svg" alt="Stars" />
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
