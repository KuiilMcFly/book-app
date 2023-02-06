import React from "react";

const Takeaway = () => {
  return (
    <div>
      {props.takeaways.map((takeaway,index) => (
        <div key={index}>{takeaway}</div>
      ))}
    </div>
  );
};

export default Takeaway;
