import { SLIDE_VIEW_4 } from "app/slide";
import { CardBook, Title } from "components";
import React from "react";
import Slider from "react-slick";
import "./HotBooks.scss";

function HotBooks(props) {
  const books = props.books;
  return (
    <section>
      <div className="hotproducts">
        <div className="container">
          <div className="home__header">
            <Title
              title="HOT BOOKS"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eum et. Veritatis ipsum iusto corrupti eligendi iste odio inventore dolores saepe fuga, magnam exercitationem! Magnam expedita nobis illo laudantium possimus."
            />
          </div>
          <div>
            <Slider {...SLIDE_VIEW_4}>
              {books.map((book) => {
                return (
                  <div key={book.id}>
                    <CardBook book={book} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotBooks;
