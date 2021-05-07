import React, { useContext } from 'react';
import { BookProvider, useBookList } from './BookListContext';

const BookList = () => {
  return (
    <div className="book-list">
      <p>check it out</p>
    </div>
  )
}

export default BookList