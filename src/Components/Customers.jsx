import React from "react";
import CustomerCard from "./CustomerCard";

const Customers = () => {
  return (
    <div className="pad wrap-flex gp-30 customers">
      <h1>Satisfied customers are our best Ads</h1>
      <div className="sb-flex gp-30 customers-container">
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
      </div>
    </div>
  );
};

export default Customers;
