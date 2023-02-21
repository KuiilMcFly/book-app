import { useState, useEffect } from "react";
import "../components/componentsStyles/bookStyle/Book.css";
import { useLocation, useParams } from "react-router-dom";
import SingleChapter from "../components/SingleChapter";
import { v4 as uuidv4 } from "uuid";
import Message from "../components/message";
import { googleBooks } from "../components/Axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchChaptersData, createNewChapter } from "../store/actions/handleBookChapter";

function Book() {
  const params = useParams();
  const bookID = params.id;

  const location = useLocation();

  console.log(location);
  const bookKey = location.state.bookKey;

  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [inputText, setInputText] = useState("");
  //const [chapterList, setChaptersList] = useState([{ id: uuidv4() }]);

  const dispatch = useDispatch();
  const chaptersList = useSelector(state => state.chapterReducer.chaptersList);

  const fetchBook = async () => {
    setLoading(true);
    try {
      const bookData = await googleBooks.get(`/${bookID}`);
      setBookData(bookData.data.volumeInfo);
      await fetchChapters();
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchBook();
    fetchChapters();
  }, [bookID]);

  const renderChapters = () => {
    return chaptersList.map((key, index) => {
      return (
        <SingleChapter
          bookName={bookData.title}
          key={key}
          chapterKey={key}
          bookKey={bookKey}
          bookID={bookID}
          number={index + 1}
        />
      );
    });
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleNewChapter = (e) => {
    e.preventDefault();
    dispatch(createNewChapter(bookKey, inputText));
    setInputText("");
   
  };

  const fetchChapters = () => {
    dispatch(fetchChaptersData(bookKey));
  };

  const nextChapterNumber = chaptersList.length + 1;

  return error ? (
    <Message message="Errore di Network" />
  ) : loading ? (
    <p>Carico...</p>
  ) : (
    <div className="book-informations">
      <div className="flex-book-box">
        <div className="book-description">
          <h1>{bookData.title}</h1>
          <p>{bookData.description}</p>
          <h4>Autore: {bookData.authors}</h4>
        </div>

        <div className="bookImages">
          <img src={bookData.imageLinks?.thumbnail} alt="" />
        </div>
      </div>

      <div className="chapters-box">
        {renderChapters()}
        {/*<button onClick={createNewChapter} style={{marginTop: '20px', padding: '6px'}}>
              <img src={PlusIcon} alt="" style={{width: '30px'}} />
    </button>*/}
        <form onSubmit={handleNewChapter}>
          <input
            onChange={handleInputChange}
            type="text"
            value={inputText}
            placeholder={`aggiungi takeaway al capitolo ${nextChapterNumber}`}
          />
        </form>
      </div>
    </div>
  );
}

export default Book;
