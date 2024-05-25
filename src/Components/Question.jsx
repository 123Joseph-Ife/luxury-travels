import React, { useState } from "react";

const Question = () => {
  const [text, setText] = useState("");
  function Submit(e) {
    e.preventDefault();
    window.alert(`Email was successfully sent to ${text}`);
  }
  const [first, setFirst] = useState("closed");
  const [second, setSecond] = useState("closed");
  const [third, setThird] = useState("closed");
  return (
    <div className="pad all-flex question">
      <div className="txt txt-ct">
        <h1>
          Got a question for <span className="blue"> Luxury Travels</span>
        </h1>
        <p>
          Try a variety of options when using our services Try a variety of<br />
          options when using our services
        </p>
        <form className="email" onSubmit={Submit}>
          <input
            type="email"
            aria-label="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button className="btn theme-background white">Submit</button>
        </form>
      </div>
      <div className="right">
        <p>
          Maybe Your questions have been answered, <br />
          Check this out.
        </p>
        <div className="faqs wrap-flex">
          <div className="faq wrap-flex">
            <div className="sb-flex" onClick={() => {
                first === "opened" ? setFirst("closed") : setFirst("opened")
            }}>
              <h4>What is Luxury Travels?</h4>
              <img src={first === "opened" ? "/icons/up.svg" : "/icons/down.svg"} alt={first === "opened" ? "Up Arrow" : "Down Arrow"} />
            </div>
            <p className={first === "opened" ? "block" : "none"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              dolores explicabo illum fuga sunt dignissimos blanditiis mollitia,
              quo ab sequi, repudiandae enim ducimus debitis tenetur, molestiae
              sapiente. Dolore, commodi reiciendis!
            </p>
          </div>
          <div className="faq wrap-flex">
            <div className="sb-flex" onClick={() => {
                second === "opened" ? setSecond("closed") : setSecond("opened")
            }}>
              <h4>What is Luxury Travels?</h4>
              <img src={second === "opened" ? "/icons/up.svg" : "/icons/down.svg"} alt={second === "opened" ? "Up Arrow" : "Down Arrow"} />
            </div>
            <p className={second === "opened" ? "block" : "none"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              dolores explicabo illum fuga sunt dignissimos blanditiis mollitia,
              quo ab sequi, repudiandae enim ducimus debitis tenetur, molestiae
              sapiente. Dolore, commodi reiciendis!
            </p>
          </div>
          <div className="faq wrap-flex">
            <div className="sb-flex" onClick={() => {
                third === "opened" ? setThird("closed") : setThird("opened")
            }}>
              <h4>What is Luxury Travels?</h4>
              <img src={third === "opened" ? "/icons/up.svg" : "/icons/down.svg"} alt={third === "opened" ? "Up Arrow" : "Down Arrow"}/>
            </div>
            <p className={third === "opened" ? "block" : "none"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              dolores explicabo illum fuga sunt dignissimos blanditiis mollitia,
              quo ab sequi, repudiandae enim ducimus debitis tenetur, molestiae
              sapiente. Dolore, commodi reiciendis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
