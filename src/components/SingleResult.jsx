import './componentsStyles/SingleResult/singleResult.css';

const SingleResult = ({titolo, descrizione}) => {
    return (
        <div>
            <div className='custom-result'>
                <h3>{titolo}</h3>
                <p>{descrizione}</p>
            </div>
        </div>
    )
}

export default SingleResult;

