import { AboutUs, Banner, HotBooks, TypesBook } from "components";
import { selectBooks } from "features/books/booksSlice";
import React from "react";
import { useSelector } from "react-redux";

function HomePage(props) {
  const books = useSelector(selectBooks);

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
