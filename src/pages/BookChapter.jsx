import { useParams} from "react-router-dom";
import '../components/componentsStyles/bookChapterStyle/bookChapterStyle.css'
import {useState} from 'react'
import Takeaway from "../components/Takeaway";



const BookChapter = () => {
    const params = useParams();
    const [inputText, setInputText] = useState("");
    const [takeawayList, setTakeawayList] = useState([]);

    const addTakeaway = (e) => {
       e.preventDefault(); 
       setTakeawayList([...takeawayList, inputText]);
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
              <Takeaway takeaways={takeawayList}/>
            </div>
        </div>
    )
}

export default BookChapter;