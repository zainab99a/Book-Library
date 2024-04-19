
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [input, setinput] = useState('')
  const [books, setbooks] = useState([])
  useEffect(()=>{
    fetch(`https://www.googleapis.com/books/v1/volumes?q=danbrown/search?q=${input}`)
    .then((res) => {
      return res.json(); })
    .then((data) => {
      setbooks(data.items);});

  },[input]);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setinput(event.target.value);
    }
  };

 
  return (
    <div className='App'>
    <input className='search'type="text"
     placeholder='Search' onChange={(e)=>setinput(e.target.value)} 
     value={input} onKeyDown={handleKeyPress}/>
    <div className='container'>
      {books.map(book => (
        <div className="card">
          {book.volumeInfo.imageLinks && (
      <img className='image' src={book.volumeInfo.imageLinks.smallThumbnail} alt="" />
    )}
          <h5>{book.volumeInfo.title}</h5>
          <p>{book.volumeInfo.subtitle}</p>
          
        </div>
      ))}
      </div>
    
    </div>
    
  );
}

export default App;
