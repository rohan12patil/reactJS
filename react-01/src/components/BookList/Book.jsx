/* eslint-disable react/prop-types */
const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <div className='book'>
      <h2>{title}</h2>
      <img src={img} />
      <h3>{author}</h3>
      {children}
    </div>
  );
};

export default Book;
