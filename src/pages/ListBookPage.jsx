import { CardBook, SearchBar, Title } from "components";
import { selectBooks } from "features/books/booksSlice";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function ListBookPage() {
  const [visible, setVisible] = useState(8);
  const books = useSelector(selectBooks);

  const showMoreProducts = () => {
    setVisible((oldValue) => oldValue + 4);
  };

  return (
    <main>
      <div className="container">
        <hr />
        <Title
          title="List of Books"
          text="
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum aliquid pariatur fugiat alias voluptatum expedita ducimus optio deleniti autem voluptatibus rem, accusamus eligendi harum officiis laudantium adipisci, non dolorum."
        />
        <hr />

        <SearchBar />

        <div className="row">
          {books.slice(0, visible).map((book) => {
            return (
              <div
                key={book.id}
                className="col-10 col-md-6 col-lg-3 mx-auto mb-3"
              >
                <CardBook book={book} />
              </div>
            );
          })}
        </div>
        {visible === books.length ? null : (
          <div className="row">
            <div
              style={{ textAlign: "center" }}
              className="col-10 mx-auto pt-3"
            >
              <hr />
              <button onClick={showMoreProducts} className="mb-5">
                Show more
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default ListBookPage;
