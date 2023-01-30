import './componentsStyles/SingleChapterStyle/singleChapter.css'
import {Link} from 'react-router-dom';
const SingleChapter = ({number, bookID, bookName}) => {
    return (
        <Link className='chapters-container' to={{pathname: `/book/${bookName}/chapter/${number}`, 
        state: {
            libro: bookName,
            capitolo: number,
        }
        }}>
            <p>Capitolo {number}</p>
        </Link>
    );
};

export default SingleChapter;
