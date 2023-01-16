import './componentsStyles/headerStyle/header.css';
import booksImg from "../images/book.png";
import bookMark from "../images/bookmark.png"

const Header = () => {
    return (
        <div>
            <div className="left-header">
                <img src={booksImg} alt="Libri" />
            </div>

            <div className="right-header">
                <h1>I miei Libri</h1>
                <img src={bookMark} alt="Segnalibro" />
            </div>

            
        </div>
    )
}
  
  export default Header;