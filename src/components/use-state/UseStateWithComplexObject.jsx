import React, { useState } from "react";

const UseStateWithComplexObject = () => {
  const [userDetails, setUserDetails] = useState({
    user: {
      name: "pabitra",
      age: 23,
      isActive: true,
    },
  });

  const handleUpdateUserDetails = () => {
    setUserDetails((prevDetails) => {
      console.log("previous : ", prevDetails);
      console.log("current : ", prevDetails.user);
      return {
        ...prevDetails, // Copy everything from the prevDetails box
        user: {
          // Inside, there's a new user box
          ...prevDetails.user, // Copy everything from the original user box
          isActive: false, // Make a small change: set isActive to false
        },
      };
    });
  };

  return (
    <>
      <h1>{JSON.stringify(userDetails)}</h1>
      <button onClick={handleUpdateUserDetails}>update</button>
    </>
  );
};

export default UseStateWithComplexObject;
