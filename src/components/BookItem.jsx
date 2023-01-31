import './componentsStyles/bookItem/bookItem.css'

const bookItem = (bookTitle, index) => {
    return(
      <div key={index} className='bookTitle-box'>
        <p>{bookTitle}</p>
      </div>
    )
  }

  export default bookItem