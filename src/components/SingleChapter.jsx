import './componentsStyles/SingleChapterStyle/singleChapter.css'
import {Link} from 'react-router-dom';
const SingleChapter = ({number, bookID}) => {
    return (
        <Link className='chapters-container' to={{pathname: `/book${bookID}/chapter/${number}`, 
        state: {
            libro: 'libro 1',
            capitolo: 5
        }
        }}>
            <p>Capitolo {number}</p>
        </Link>
    );
};

export default SingleChapter;