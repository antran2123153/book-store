import { Title } from "components";
import React from "react";
import { TYPES_BOOK } from "utils/static";
import CardTypesBook from "../CardTypesBook/CardTypesBook";
import "./TypesBook.scss";

function TypesBook(props) {
  return (
    <section>
      <div className="container">
        <div className="typesbook">
          <div className="typesbook__header">
            <Title
              title="List type of book"
              text="LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. NATUS, EUM ET. VERITATIS IPSUM IUSTO CORRUPTI ELIGENDI ISTE ODIO INVENTORE DOLORES SAEPE FUGA, MAGNAM EXERCITATIONEM! MAGNAM EXPEDITA NOBIS ILLO LAUDANTIUM POSSIMUS."
            />
          </div>
          <div className="typesbook__list">
            {TYPES_BOOK.map((type) => {
              return <CardTypesBook key={type.id} type={type} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TypesBook;
