/* eslint-disable react/prop-types */
const Book = ({img, title, author}) => {
  return (
    <div className='book'>
      <h2>{title}</h2>
      <img src={img}/>
      <h3>{author}</h3>
    </div>
  );
};

export default Book;
