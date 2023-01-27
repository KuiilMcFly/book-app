import { useLocation } from "react-router-dom";

const BookChapter = () => {
    const location = useLocation();
    const {libro, capitolo} = location.state;

    return (
        <div>
            <h1>
                {libro} - Capitolo: {capitolo}
            </h1>
        </div>
    )
}

export default BookChapter;