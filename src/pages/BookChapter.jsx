import { useParams, useLocation} from "react-router-dom";
import '../components/componentsStyles/bookChapterStyle/bookChapterStyle.css'
import {useState, useEffect} from 'react'
import Takeaway from "../components/Takeaway";
import axios from "axios";



const BookChapter = () => {
    const params = useParams();
    const [inputText, setInputText] = useState("");
    const [takeawayList, setTakeawayList] = useState([]);

    const location = useLocation();
    const {chapterKey, capitolo, libro, bookKey} = location.state;
    console.log(location)
    console.log(chapterKey, 'HOOK');

    useEffect(() => {
        fetchBookTakeAways();
    }, []);
    

    const addTakeaway = (e) => {
       e.preventDefault(); 
       setTakeawayList([...takeawayList, inputText]);
    }
    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }

    

    const fetchBookTakeAways= async () => {
     const takeAwayData = await axios.get(`https://book-takeaway-df65d-default-rtdb.europe-west1.firebasedatabase.app/booksData/${bookKey}/chapters/${chapterKey}.json`);
     setTakeawayList(takeAwayData.data);
     console.log(takeAwayData);
    }
    

    return (
        <div className="container">
            <h1>
                {params.id} - Capitolo: {params.number}
            </h1>

            <form onSubmit={addTakeaway}>
                <p>Aggiungi key takeaway</p>
                <input type="text" value={inputText} onChange={handleInputChange} />
            </form>

            <div className="takeaway">
              <Takeaway takeaways={takeawayList}/>
            </div>
        </div>
    )
}

export default BookChapter;