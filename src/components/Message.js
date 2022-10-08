import { useState } from "react";

export const Message = (props) => {
  const [message, setMessage] = useState("Welcome visitor");
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Thanks for subscribing")}>
        Subscribe
      </button>
    </div>
  );
};
