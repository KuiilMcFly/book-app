import "./componentsStyles/SingleResult/singleResult.css";
import plusMark from"../images/add.png";
import { Link } from "react-router-dom";

const SingleResult = ({ titolo, immagine, id}) => {
    
  const cutTitle = titolo.slice(0, 46);
  const imgPath = immagine
    ? immagine
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/1200px-Placeholder_book.svg.png";

    const addBook = () => {
      console.log('aggiungi libro');

      //aggiungere al database
    }
  return (
    <div>
      <div className="custom-result">
      <Link to={`Book/${id}`} style={{textDecoration: 'none', color: 'black', fontBold: 'Bolder'}}>
          <div style={{ height: "70px" }}>
            <h3>{cutTitle}</h3>
          </div>

          <div className="imgBox">
            <img src={imgPath} alt="" style={{ maxHeight: "300px" }} />
          </div>
      </Link>
          
            <img onClick={addBook} id="plusmark" src={plusMark} alt="" />
          
        
      </div>
    </div>
  );
};

export default SingleResult;
