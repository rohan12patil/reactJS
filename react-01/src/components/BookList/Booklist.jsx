import Book from './Book';
import './BookList.css';

const BookList = () => {
  return (
    <section className='bookList'>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
};

export default BookList;
