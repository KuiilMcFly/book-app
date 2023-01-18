import '../components/componentsStyles/resultStyle/result.css';
import SingleResult from './SingleResult';

const fakeData = [
    {titolo: 'Libro 1', descrizione: 'lorem ipsumkoenfienoeigbnerjkgvnrklgnrkjgnbrjkgnrklgfnrklgnrikojgn'},
    {titolo: 'Libro 2', descrizione: 'lorem ipsumkoenfienoeigbnerjkgvnrklgnrkjgnbrjkgnrklgfnrklgnrikojgn'},
    {titolo: 'Libro 3', descrizione: 'lorem ipsumkoenfienoeigbnerjkgvnrklgnrkjgnbrjkgnrklgfnrklgnrikojgn'}
]

const Result = () => {
    const renderElement = () => {
        return fakeData.map((book) => {
            return <SingleResult titolo={book.titolo} descrizione={book.descrizione}/>
        })
    }
    return (
        <div>
            <h1>Risultati</h1>

            <div className='results-container'>
                {renderElement()}
            </div>

        </div>
    )
}

export default Result;