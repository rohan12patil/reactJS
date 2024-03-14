const Book = () => {
  const title = 'Boy with Flowers Book';
  const bookImg =
    'https://m.media-amazon.com/images/I/51EFk4pM8PL.AC_SX250.jpg';
  const author = 'Jarvis';

  return (
    <div className='book'>
      <h2>{title}</h2>
      <img src={bookImg}/>
      <h3>{author}</h3>
    </div>
  );
};

export default Book;
