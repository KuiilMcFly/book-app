import {useLocation } from "react-router-dom";
import "../components/componentsStyles/bookChapterStyle/bookChapterStyle.css";

import { useState, useEffect } from "react";
import { firebase } from "../components/Axios";



const BookChapter = () => {
  const [inputText, setInputText] = useState("");
  const [takeAwayList, setTakeAwayList] = useState([]);

  const location = useLocation();
  const chapterKey = location.state.chapterKey;
  const number = location.state.capitolo;
  const libro = location.state.libro;
  const chiave = location.state.bookKey;
  // console.log(location.state);

  const fetchBookTakeAways = async () => {
    try {
      const takeAwayData = await firebase.get(
        `booksData/${chiave}/chapters/${chapterKey}.json`
      );
      setTakeAwayList(takeAwayData.data);
      console.log(takeAwayData, "TAKEAWAY DATA");
    } catch (error) {
      console.log(error);
    }
  }; 



  const pushNewTakeaways = async (e) => {
    e.preventDefault();
    try {
      setTakeAwayList((oldState) => [...oldState,inputText])
      const response = await firebase.put(
        `booksData/${chiave}/chapters/${chapterKey}/.json`,
        [...takeAwayList, inputText]
      );
      setInputText("");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // console.log("questo è state " + location.state);
    fetchBookTakeAways();
  }, []);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="container">
      <h1>
        {libro} - Capitolo: {number}
      </h1>

      <form onSubmit={pushNewTakeaways}>
        <p>Aggiungi key takeaway</p>
        <input type="text" value={inputText} onChange={handleInputChange} />
        
      </form>

      <div className="takeaway">
      {takeAwayList.map((takeaway) => <li>{takeaway}</li>)}
      
        
      </div>
    </div>
  );
};

export default BookChapter;
