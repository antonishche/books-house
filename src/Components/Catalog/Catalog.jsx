import "./Catalog.scss";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
export default function Catalog() {
  const genres = "Picture Books";
  const [books, setBooks] = useState([]);
  const [showAll, setShowAll] = useState("catalog");
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/${genres}.json?api-key=m1gKqvE9El7QVotwOmRz1GiwFG1hEGFk`
      );
      setBooks(res.data.results.books);
      console.log(res.data.results.books);
    };
    fetchBooks();
  }, []);
  return (
    <div className="catalog">
      <div className="catalog-head">
        <span className="catalog-head-title">{genres}</span>
        <div
          className="catalog-arrow none"
          onClick={() => setShowAll("catalog-active")}
        >
          <span>Show all</span>
          <img src="../../../public/arrow.svg" alt="#" />
        </div>
      </div>
      <div className="catalog-body">
        {books.map((book) => (
          <div className="book__item" key={uuidv4()}>
            <img src={book.book_image} alt="#" />
            <span className="book__item-title"> {book.title}</span>
            <span className="book__item-subtitle">{book.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
