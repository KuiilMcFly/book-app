import "../components/componentsStyles/resultStyle/result.css";
import SingleResult from "./SingleResult";



const Result = ({ data, immagine }) => {
  console.log("dati da result", data.items);
  const myData = data.items;

  function getImgPath(img){
    return img ? img : '"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/1200px-Placeholder_book.svg.png"';
  }

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
                immagine={getImgPath(book.volumeInfo.imageLinks?.thumbnail)}
                descrizione={book.volumeInfo.description} 
              />
            
            ))
          : "Nessun Risultato"}
      </div>
    </div>
  );
};

export default Result;
