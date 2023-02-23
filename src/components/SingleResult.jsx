import "./componentsStyles/SingleResult/singleResult.css";
import plusMark from"../images/add.png";
import { Link } from "react-router-dom";
import heart from"../images/heart.png";
import Spinner from "./Loading";
import { useSelector } from "react-redux";


const SingleResult = ({isFavorite, error, loading, titolo, immagine, id , savedBooks, addBook}) => {

  const cutTitle = titolo.slice(0, 46);
  const imgPath = immagine
    ? immagine
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/1200px-Placeholder_book.svg.png";



    const buttonColor = savedBooks.includes(id) ? 'grey' : 'green';

    const token = useSelector(state => state.authReducer.token);

  return (
    <div>
      <div className="custom-result">
      <Link to={`Book/${id}`} style={{textDecoration: 'none', color: 'black', fontBold: 'Bolder'}} state={{bookKey: id}}>
          <div style={{ height: "70px" }}>
            <h3>{cutTitle}</h3>
          </div>

          <div className="favorite-icon">
            {isFavorite ? <img src={heart} alt="" /> : " "}
          </div>

          <div className="imgBox">
            <img src={imgPath} alt="" style={{ maxHeight: "300px" }} />
          </div>
      </Link>
          
            {loading ? (<Spinner/>) :(
              <div style={{display:'flex', alignItems: 'center'}}>
                {token ? <img onClick={() => addBook(savedBooks, id, titolo, immagine)} id="plusmark" src={plusMark} alt="" style={{backgroundColor: buttonColor}} /> : null}
                {error ? <p>errore di network</p>: null}
              </div>
            )}
            
      </div>
      
    </div>
  );
};

export default SingleResult;
