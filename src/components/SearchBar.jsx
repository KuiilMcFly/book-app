import './componentsStyles/SearchbarStyle/searchbar.css'

const SearchBar = () => {
    return (
        <div>
            <h1>Cerca un libro</h1>
            <input placeholder='Esempio: Harry Potter e la pietra filosofale' type="text" />
        </div>
    )
}

export default SearchBar;