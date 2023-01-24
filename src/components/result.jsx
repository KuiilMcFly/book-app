import "../components/componentsStyles/resultStyle/result.css";
import SingleResult from "./SingleResult";
import {Link} from 'react-router-dom';


const Result = ({ data }) => {
  console.log("dati da result", data.items);
  const myData = data.items;

  return (
    <div>
      <h1 style={{paddingLeft: '30px', color: 'white', fontSize: '26px'}}>Risultati:</h1>
   
      <div className="results-container">
        {myData
          ? myData.map((book) => (
            <Link key={book.id} to={`Book/${book.id}`} style={{textDecoration: 'none', color: 'black', fontBold: 'Bolder'}}>
              <SingleResult
                
                titolo={book.volumeInfo.title}
                immagine={book.volumeInfo.imageLinks.thumbnail}
                descrizione={book.volumeInfo.description} 
              />
            </Link>
            ))
          : "Nessun Risultato"}
      </div>
    </div>
  );
};

export default Result;
