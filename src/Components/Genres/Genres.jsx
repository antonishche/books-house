import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Catalog from "../Catalog/Catalog";
import Prime from "../Prime/Prime";
import "./Genres.scss";

export default function Genres() {

  const [genres, setGenres] = useState([]);
  const [showAll, setShowAll] = useState("genres");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [maxGenresReached, setMaxGenresReached] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);

  useEffect(() => {
    const savedGenres = localStorage.getItem("selectedGenres");
    if (savedGenres) {
      setSelectedGenres(JSON.parse(savedGenres));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres));
  }, [selectedGenres]);

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await axios.get(
        "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=m1gKqvE9El7QVotwOmRz1GiwFG1hEGFk"
      );
      setGenres(res.data.results.lists);

      console.log(res.data.results.lists);
    };    fetchBooks();

    fetchGenres();
  }, []);

  const handleGenreClick = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
      setMaxGenresReached(false);
    } else {
      if (selectedGenres.length < 1) {
        setSelectedGenres([...selectedGenres, genre]);
      } else {
        setMaxGenresReached(true);
      }
    }
  };

  const handleContinue = () => {
    if (selectedGenres.length === 1) {
      setShowCatalog(true);
    }
  };
  return (
    <div>
      <div className={showAll}>
        <div className="genres__leftitem none">
          {genres.map((genre) => (
            <div
              className={`genres__item ${
                selectedGenres.includes(genre) ? "selected" : ""
              } ${
                maxGenresReached && !selectedGenres.includes(genre)
                  ? "disabled"
                  : ""
              }`}
              key={uuidv4()}
              onClick={
                maxGenresReached && !selectedGenres.includes(genre)
                  ? null
                  : () => handleGenreClick(genre)
              }
            >
              <span>{genre.list_name}</span>
              <img
                className="genres__item-plus"
                src="../../../public/plus.svg"
                alt="#"
              />
              <img
                className="genres__item-ok"
                src="../../../public/ok.svg"
                alt="#"
              />
            </div>
          ))}
        </div>
        <div className="genres-active-item">
          <h2 className="genres-active-item-title">Select Genres</h2>
          <div className="genres-active-item-block">
            <div className="genres__leftitem">
              <span>Select the type of book you enjoy reading.</span>
              {genres.map((genre) => (
                <div
                  className={`genres__item ${
                    selectedGenres.includes(genre) ? "selected" : ""
                  } ${
                    maxGenresReached && !selectedGenres.includes(genre)
                      ? "disabled"
                      : ""
                  }`}
                  key={uuidv4()}
                  onClick={
                    maxGenresReached && !selectedGenres.includes(genre)
                      ? null
                      : () => handleGenreClick(genre)
                  }
                >
                  <span>{genre.list_name}</span>
                  <img
                    className="genres__item-plus"
                    src="../../../public/plus.svg"
                    alt="#"
                  />
                  <img
                    className="genres__item-ok"
                    src="../../../public/ok.svg"
                    alt="#"
                  />
                </div>
              ))}
            </div>
            <div
              className="genres-active-item-btn"
              onClick={() => {
                setShowAll("genres");
                handleContinue();
              }}
            >
              <a href="#">Continue</a>
            </div>
            <div className="span">
              <span>Select 1 genres to continue</span>
            </div>
          </div>
        </div>
        <div
          className="genres-arrow none"
          onClick={() => setShowAll("genres-active")}
        >
          <span>Show all</span>
          <img src="../../../arrow.svg" alt="#" />
        </div>
      </div>
      <Catalog selectedGenres={selectedGenres} />
    </div>
  );
}
