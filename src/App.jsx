import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {

const [books, setBooks] = useState([]);

useEffect(() => {
  const fetchBooks = async () => {
    const data = await fetch (`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`)
    const allData = await data.json();
    setBooks(allData.books)
  }

  fetchBooks();

}, [])


  return (
    <>
      <h1>Book Buddy!</h1>


      <ul>{books.map((book) => {
        console.log(book);
        return <li key={book.id}>{book.title}
        <img src={book.coverimage} style={{width: 200, height: 350,}}></img></li> 
      })}
      </ul>
    </>
  )
}

export default App
