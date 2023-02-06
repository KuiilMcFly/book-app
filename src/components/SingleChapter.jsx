import './componentsStyles/SingleChapterStyle/singleChapter.css'
import {Link} from 'react-router-dom';
const SingleChapter = ({number, bookID, bookName, chapterKey, bookKey}) => {
    return (
        <Link state= {{
            state: {
                libro: bookName,
                capitolo: number,
                chapterKey: chapterKey,
                bookKey: bookKey,
            }
        }} className='chapters-container' to={{pathname: `/book/${bookName}/chapter/${number}`}}>
            <p>Capitolo {number}</p>
        </Link>
    );
};


export default SingleChapter;
