const renderTakeaway = ({ takeaways }) => {
    
  return <div>{takeaways.length === 0 && <p>ok</p>
  
  }
  {takeaways.map((takeaway, index) => {
    return <li key={index}>{takeaway}</li>
  }) }
  
  </div>;
};

export default renderTakeaway;


