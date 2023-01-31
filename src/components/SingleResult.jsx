import "./componentsStyles/SingleResult/singleResult.css";
import plusMark from"../images/add.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "./Loading";
import { useState } from "react";

const SingleResult = ({ titolo, immagine, id}) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
    
  const cutTitle = titolo.slice(0, 46);
  const imgPath = immagine
    ? immagine
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/1200px-Placeholder_book.svg.png";


    const addBook = async () => {
      try {
        const data = await axios.post('https://book-takeaway-df65d-default-rtdb.europe-west1.firebasedatabase.app/booksData.json',
       {
        bookId: id,
        bookTitle: titolo,
        bookImg: immagine,
      }); 
      console.log(data);
      setLoading(false);
      setError(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true)
      } 
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
          
            {loading ? (<Spinner/>) :(
              <div style={{display:'flex', alignItems: 'center'}}>
                <img onClick={addBook} id="plusmark" src={plusMark} alt="" />
                {error ? <p>errore di network</p>: null}
              </div>
            )};
            
      </div>
      
    </div>
  );
};

export default SingleResult;
