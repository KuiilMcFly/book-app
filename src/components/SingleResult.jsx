import "./componentsStyles/SingleResult/singleResult.css";

const SingleResult = ({ titolo, immagine}) => {
    
  const cutTitle = titolo.slice(0, 46);
  const imgPath = immagine
    ? immagine
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/1200px-Placeholder_book.svg.png";
  return (
    <div>
      <div className="custom-result">
        <div style={{ height: "70px" }}>
          <h3>{cutTitle}</h3>
        </div>

        <img src={imgPath} alt="" style={{ maxHeight: "300px" }} />
      </div>
    </div>
  );
};

export default SingleResult;
