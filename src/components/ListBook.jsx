import BookItem from './BookItem';

const ListBook = () => {
    const fakeData = ['harry potter', 'abitudini', 'ciao mondo'];
   return fakeData.map((item, index) => {
    return BookItem(item, index)
    })
}

export default ListBook