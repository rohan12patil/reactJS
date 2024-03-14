
const Book = ()=>{
return <div className="book">
    <Title/>
    <BookImg/>
    <Author/>
    <br/>
</div>
}

export default Book;

const Title = () => {
  return <h2>Boy with Flowers Book</h2>;
};

const BookImg = () =>{
    return (
      <img
        src='https://m.media-amazon.com/images/I/51EFk4pM8PL.AC_SX250.jpg'
        alt='BookImage'
      ></img>
    );
}

const Author = ()=>{
    return <h3>Author: Jarvis</h3>;
}