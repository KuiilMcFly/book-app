import React from "react";

const Takeaway = (props) => {
  return (
    <div>
      {props.takeaways.map((takeaway,index) => (
        <div key={takeaway + index}>{takeaway}</div>
      ))}
    </div>
  );
};

export default Takeaway;
