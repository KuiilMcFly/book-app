import './componentsStyles/SingleResult/singleResult.css';


const SingleResult = ({titolo, immagine}) => {
    const cutTitle = titolo.slice(0,46);
    return (
        <div>
            

                <div className='custom-result'>
                    <div style={{height: '70px'}}>
                        <h3>{cutTitle}</h3>
                    </div>
                    <img src={immagine} alt="" style={{maxHeight: '300px'}}/>
                    
                </div>
           
        </div>
    )
}

export default SingleResult;

