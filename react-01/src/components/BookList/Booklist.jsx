import Book from './Book';
import './BookList.css';

const firstBook = {
  title: 'Boy with Flowers',
  img: 'https://m.media-amazon.com/images/I/51EFk4pM8PL.AC_SX250.jpg',
  author: 'Jarvis',
};

const secondBook = {
  title: 'Can I Play? ',
  img: 'https://m.media-amazon.com/images/I/51+32LW6pfL.AC_SX250.jpg',
  author: 'Nicola Kinnear',
};

const BookList = () => {
  return (
    <section className='bookList'>
      <Book
        title={firstBook.title}
        img={firstBook.img}
        author={firstBook.author}
      >
        <br/>
        <h5>Few Copies Left</h5>
        <button> Buy Now</button>
      </Book>
      <Book
        title={secondBook.title}
        img={secondBook.img}
        author={secondBook.author}
      />
    </section>
  );
};

export default BookList;
