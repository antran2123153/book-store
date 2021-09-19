import { BOOKS } from "app/data";
import { AboutUs, Banner, HotBooks, TypesBook } from "components";
import { selectBooks, setBooks } from "features/books/booksSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function HomePage(props) {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  const hotbook = books.filter((book) => book.hot === true);

  return (
    <main>
      <Banner />
      <HotBooks books={hotbook} />
      <TypesBook />
      <AboutUs />
    </main>
  );
}

export default HomePage;
