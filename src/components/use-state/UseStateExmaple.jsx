import React, { useState } from "react";
import "../../styles/use.state.css";
const UseStateExample = () => {
  const [count, setCount] = useState(0);
  const [userDetails, setUserDetails] = useState({
    name: "pabitra",
  });

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleUserDetails = () => {
    setUserDetails((prevDetails) => {
      return { ...prevDetails, age: 23 };
    });
  };

  // or use
  /*   const handleUserDetails = () => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      age: 23,
    }));
  };
 */

  console.log("Rendering UseStateExample ", count);

  return (
    <>
      <div className="container">
        <h1 className="heading">UseState Hook Example</h1>
        <p className="count">Count: {count}</p>
        <button onClick={handleIncrement} className="button">
          +
        </button>
        <button onClick={handleDecrement} className="button">
          -
        </button>

        <h1>User Details: {JSON.stringify(userDetails)}</h1>
        <button onClick={() => handleUserDetails()} className="button">
          change User Detials
        </button>
      </div>
    </>
  );
};

export default UseStateExample;
