import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./Genres.scss";
export default function Genres() {
  const [genres, setGenres] = useState([]);
  const [showAll, setShowAll] = useState("genres");
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=m1gKqvE9El7QVotwOmRz1GiwFG1hEGFk"
      );
      setGenres(res.data.results.lists);
      console.log(res.data.results.lists);
    };
    fetchBooks();
  }, []);
  return (
    <div className={showAll}>
      <div className="genres__leftitem none">
        {genres.map((genres) => (
          <div className="genres__item" key={uuidv4()}>
            <span>{genres.list_name}</span>
          </div>
        ))}
      </div>
      <div className="genres-active-item">
        <h2 className="genres-active-item-title">Select Genres</h2>
        <div className="genres-active-item-block">
          <div className="genres__leftitem">
            <span>Select the type of book you enjoy reading.</span>
            {genres.map((genres) => (
              <div className="genres__item" key={uuidv4()}>
                <span>{genres.list_name}</span>
              </div>
            ))}
          </div>
          <div className="genres-active-item-btn" onClick={() => setShowAll("genres")}>
            <a href="#">Continue</a>
          </div>
          <div className="span">
            <span>Select 3 or more genres to continue</span>
          </div>
        </div>
      </div>
      <div
        className="genres-arrow none"
        onClick={() => setShowAll("genres-active")}
      >
        <span>Show all</span>
        <img src="../../../public/arrow.svg" alt="#" />
      </div>
    </div>
  );
}
