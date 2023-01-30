import "../components/componentsStyles/resultStyle/result.css";
import SingleResult from "./SingleResult";



const Result = ({ data }) => {
  console.log("dati da result", data.items);
  const myData = data.items;

  return (
    <div>
      <h1 style={{paddingLeft: '30px', color: 'white', fontSize: '26px'}}>Risultati:</h1>
   
      <div className="results-container">
        {myData
          ? myData.map((book) => (
            
              <SingleResult
                key={book.id}
                id={book.id}
                titolo={book.volumeInfo.title}
                immagine={book.volumeInfo.imageLinks.thumbnail}
                descrizione={book.volumeInfo.description} 
              />
            
            ))
          : "Nessun Risultato"}
      </div>
    </div>
  );
};

export default Result;
