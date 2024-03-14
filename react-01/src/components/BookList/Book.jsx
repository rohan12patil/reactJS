const Book = (props) => {
  const title = props.title;
  const img = props.img;
  const author = props.author;

  return (
    <div className='book'>
      <h2>{title}</h2>
      <img src={img}/>
      <h3>{author}</h3>
    </div>
  );
};

export default Book;
