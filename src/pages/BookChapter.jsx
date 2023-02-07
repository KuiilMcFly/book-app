import { useParams, useLocation} from "react-router-dom";
import '../components/componentsStyles/bookChapterStyle/bookChapterStyle.css'
import {useState, useEffect} from 'react'
import Takeaway from "../components/Takeaway";
import axios from "axios";



const BookChapter = () => {
    const params = useParams();
    const [inputText, setInputText] = useState("");
    const [takeAwayList , setTakeAwayList] = useState([]);

    const location = useLocation();
    const chapterKey = location.state.chapterKey;
    console.log(location.state);



    const fetchBookTakeAways= async () => {
     const chiave = location.state.bookKey;
     

        const takeAwayData = await axios.get(`https://book-takeaway-df65d-default-rtdb.europe-west1.firebasedatabase.app/booksData/${chiave}/chapters/${chapterKey}.json`);
        setTakeAwayList(takeAwayData.data);
        console.log(takeAwayData);
        };


    useEffect(() => {
        fetchBookTakeAways();
    }, []);
    

    const addTakeaway = (e) => {
       e.preventDefault(); 
       console.log(takeAwayList);
        setTakeAwayList([...takeAwayList, inputText]);
    }
    const handleInputChange = (e) => {
        setInputText(e.target.value);
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
               <Takeaway takeaways={takeAwayList}/> 
            </div>
        </div>
    )
}

export default BookChapter;