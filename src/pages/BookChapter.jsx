import {useLocation } from "react-router-dom";
import "../components/componentsStyles/bookChapterStyle/bookChapterStyle.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchTakeAways } from "../store/actions/handleBookTakeAways";
import { useState, useEffect } from "react";
import { firebase } from "../components/Axios";
import { pushTakeAways } from "../store/actions/handleBookTakeAways";



const BookChapter = () => {
  const [inputText, setInputText] = useState("");

  const location = useLocation();
  const chapterKey = location.state.chapterKey;
  const number = location.state.capitolo;
  const libro = location.state.libro;
  const chiave = location.state.bookKey;
  // console.log(location.state);

  const dispatch = useDispatch();
  const takeAwayList = useSelector(state => state.takeAwaysReducer.takeAwayList);

  const fetchBookTakeAways = async () => {
   dispatch(fetchTakeAways(chiave, chapterKey));
  }; 



  const pushNewTakeaways = async (e) => {
    e.preventDefault();
    dispatch(pushTakeAways(chiave, chapterKey, inputText));
    setInputText("");
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
