import React, { useReducer } from "react";

const initialState = {
  userDetails: {
    name: "John",
    age: 25,
    address: {
      city: "New York",
      country: "USA",
    },
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateName":
      return {
        ...state,
        userDetails: { ...state.userDetails, name: action.payload },
      };
    case "updateAge":
      return {
        ...state,
        userDetails: { ...state.userDetails, age: action.payload },
      };
    case "updateCity":
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          address: { ...state.userDetails.address, city: action.payload },
        },
      };
    case "updateDetails":
      return {
        ...state,
        userDetails: { ...state.userDetails, ...action.payload },
      };
    default:
      throw new Error("Unexpected action");
  }
};

const ComplexDetailsWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleUpdateName = () => {
    dispatch({ type: "updateName", payload: "Alice" });
  };

  const handleUpdateAge = () => {
    dispatch({ type: "updateAge", payload: 30 });
  };

  const handleUpdateCity = () => {
    dispatch({ type: "updateCity", payload: "San Francisco" });
  };

  const handleUpdateDetails = () => {
    dispatch({
      type: "updateDetails",
      payload: {
        name: "Bob",
        age: 28,
        address: {
          city: "Los Angeles",
          country: "USA",
        },
      },
    });
  };

  return (
    <>
      <div>
        <h2>User Details:</h2>
        <p>Name: {state.userDetails.name}</p>
        <p>Age: {state.userDetails.age}</p>
        <p>City: {state.userDetails.address.city}</p>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <button onClick={handleUpdateName}>Update Name</button>
        <button onClick={handleUpdateAge}>Update Age</button>
        <button onClick={handleUpdateCity}>Update City</button>
        <button onClick={handleUpdateDetails}>Update Details</button>
      </div>
    </>
  );
};

export default ComplexDetailsWithReducer;
