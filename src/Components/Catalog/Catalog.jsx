// import "./Catalog.scss";
// import { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import axios from "axios";
// export default function Catalog() {
//   const genres = "Picture Books";
//   const [books, setBooks] = useState([]);
//   const [showAll, setShowAll] = useState("catalog");








//   const [selectedBook, setSelectedBook] = useState(null);

//   const handleBookClick = (book) => {
//     setSelectedBook(book);
//   };

//   const handleCloseModal = () => {
//     setSelectedBook(null);
//   };





//   useEffect(() => {
//     const fetchBooks = async () => {
//       const res = await axios.get(
//         `https://api.nytimes.com/svc/books/v3/lists/${genres}.json?api-key=m1gKqvE9El7QVotwOmRz1GiwFG1hEGFk`
//       );
//       setBooks(res.data.results.books);
//       console.log(res.data.results.books);
//     };
//     fetchBooks();
//   }, []);
//   return (
//     <div className={showAll}>
//       <div className="catalog-head">
//         <div
//           className="catalog-head-btn"
//           onClick={() => {
//             setShowAll("catalog");
//           }}
//         >
//           <img src="../../../public/arrow-left-btn.svg" alt="#" />
//         </div>
//         <span className="catalog-head-title">{genres}</span>
//         <div
//           className="catalog-arrow none"
//           onClick={() => {
//             setShowAll("catalog-active");
//           }}
//         >
//           <span>Show all</span>
//           <img src="../../../arrow.svg" alt="#" />
//         </div>
//       </div>

//       <div className="catalog-body">
//       {books.map((book) => (
//         <div
//           onClick={() => handleBookClick(book)}
//           className="book__item"
//           key={uuidv4()}
//         >
//           <img src={book.book_image} alt="#" />
//           <span className="book__item-title">{book.title}</span>
//           <span className="book__item-subtitle">{book.author}</span>
//           <span className="book__item-description">{book.description}</span>
//         </div>
//       ))}

//       {selectedBook && (
//         <div className="modal-book__item">
//           <div className="modal-content">
//             <span className="close" onClick={handleCloseModal}>
//               &times;
//             </span>
//             <img src={selectedBook.book_image} alt="#" />
//             <span className="book__item-title">{selectedBook.title}</span>
//             <span className="book__item-subtitle">{selectedBook.author}</span>
//             <span className="book__item-description">{selectedBook.description}</span>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// }
import "./Catalog.scss";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";


export default function Catalog({ selectedGenres }) {

export default function Catalog() {
  const genres = "Picture Books";

  const [books, setBooks] = useState([]);
  const [showAll, setShowAll] = useState("catalog");
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const promises = selectedGenres.map(async (genre) => {
        const res = await axios.get(
          `https://api.nytimes.com/svc/books/v3/lists/${genre.list_name_encoded}.json?api-key=m1gKqvE9El7QVotwOmRz1GiwFG1hEGFk`
        );
        return res.data.results.books;
      });

      const booksData = await Promise.all(promises);
      const allBooks = booksData.flat();
      setBooks(allBooks);
    };


    if (selectedGenres.length === 1) {
      fetchBooks();
    }
  }, [selectedGenres]);

    fetchBooks();
  }, []);


  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  useEffect(() => {
    if (selectedBook) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedBook]);

  return (

    <div className={showAll}>
      {selectedBook && (
        <div className="modal-book__item">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <span className="book__item-title">{selectedBook.title}</span>
            <img src={selectedBook.book_image} alt="#" />


            <span className="book__item-subtitle">
              Author: {selectedBook.author}
            </span>
            <span className="book__item-description">
              {selectedBook.description}
            </span>

            
            <span className="book__item-subtitle">Author: {selectedBook.author}</span>
            <span className="book__item-description">{selectedBook.description}</span>

          </div>
        </div>
      )}
      <div className="catalog-head">
        <div
          className="catalog-head-btn"
          onClick={() => {
            setShowAll("catalog");
          }}
        >
          <img src="../../../public/arrow-left-btn.svg" alt="#" />
        </div>

        <span className="catalog-head-title">
          {selectedGenres.map((genre) => genre.list_name).join(", ")}
        </span>

        <span className="catalog-head-title">{genres}</span>

        <div
          className="catalog-arrow none"
          onClick={() => {
            setShowAll("catalog-active");
          }}
        >
          <span>Show all</span>
          <img src="../../../arrow.svg" alt="#" />
        </div>
      </div>
      <div className="catalog-body">
        {books.map((book) => (
          <div
            onClick={() => handleBookClick(book)}
            className="book__item"
            key={uuidv4()}
          >
            <img src={book.book_image} alt="#" />
            <span className="book__item-title">{book.title}</span>
            <span className="book__item-subtitle">{book.author}</span>
            <span className="book__item-description">{book.description}</span>
          </div>
        ))}
      </div>

      
    </div>
  );
}