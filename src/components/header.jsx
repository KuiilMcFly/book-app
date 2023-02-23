import './componentsStyles/headerStyle/header.css';
import booksImg from "../images/book.png";
import bookMark from "../images/bookmark.png"
import {Link} from 'react-router-dom';

const Header = ({isAuthenticated}) => {
    return (
        <div>
            <Link to="/">
                <div className="left-header">
                    <img src={booksImg} alt="Libri" />
                </div>
            </Link>

            
            <div className="right-header">
            {isAuthenticated ? <Link to="auth">
                <h1>Accedi</h1>
            </Link> : <Link to="logout">
                <h1>Disconnetti</h1>
            </Link>}

            <Link to="MyBooks">
                <h1>I miei Libri</h1>
            </Link>
                <img src={bookMark} alt="Segnalibro" />
            </div>

            
        </div>
    )
}
  
  export default Header;