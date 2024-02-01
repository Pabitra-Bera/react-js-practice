import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [age, setAge] = useState(0);
  const handleClick = () => setAge(age + 1);

  useEffect(() => {
    document.title = "You are " + age + " years old!";
    console.log("You are " + age + " years old!");
    // Cleanup logic (will run before the next effect or when the component is unmounted)
    return () => {
      console.log("Cleanup: Component is unmounted or effect is re-run ", age);
      // Any cleanup code you want to execute
    };
  }, [age]);

  return (
    <>
      <p> Look at the title of the current tab in your browser </p>
      <button onClick={handleClick}>Update Title!! </button>
    </>
  );
};

export default UseEffectExample;
