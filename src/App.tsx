import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';

import { BookProvider, useBookList } from './components/BookListContext'
import BookList from './components/BookList'
import BookForm from './bookForm'


// const value = useContext(bookContext);

// console.log(value); // this will return { color: 'black' }

function BookListComponent() {
  // book list state
  const bookList = useBookList();
  console.log('bookList', bookList);


  return (
    <div className="book-list">
      {bookList.state.book}
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        A List Of Wonderful Books.
        <img src={logo} className="App-logo" alt="logo" />

        {/* rename, this feel to repatitive */}
        <div className="reading-list">
          <span className="search">
            Search: <input type="text" />
          </span>
          
          <BookProvider>
            <BookListComponent />
          </BookProvider>
        </div>
        <div className="book-form">
          Add a book to the collection!
          <React.Fragment>
            <BookForm />
          </React.Fragment>
        </div>

      </header>
    </div>
  );
}

export default App;
