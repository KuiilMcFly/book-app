import "../components/componentsStyles/resultStyle/result.css";
import { firebase } from "./Axios";
import SingleResult from "./SingleResult";
import { useEffect, useState } from "react";



const Result = ({ data }) => {
  const [savedIDs, setSavedIDs] = useState([]);
  
  const myData = data.items;


  

  const getSavedBooksID = async () => {
    try {
      const response = await firebase.get();
      const data = response.data;
      const allIDs = [];
      for(let key in data) {
        allIDs.push(data[key].bookId);
      }
     setSavedIDs(allIDs);
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getSavedBooksID();
  }, [])

  function getImgPath(img){
    return img ? img : '"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/1200px-Placeholder_book.svg.png"';
  }

  
// const doesExist = savedIDs.includes(book.id); //trovare MODO PER METTERE QUESTA VARIABILE DENTRO 

  return (
    <div>
      <h1 style={{paddingLeft: '30px', color: 'white', fontSize: '26px'}}>Risultati:</h1>
      <div className="results-container">
        {myData
          ? myData.map((book) => (
      
              <SingleResult
                savedBooks={savedIDs} //NON FUNZIONANTE A CAUSA DELL'ASSENZA DELLA VARIABILE
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
