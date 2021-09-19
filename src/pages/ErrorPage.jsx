import React from "react";

ErrorPage.propTypes = {};

function ErrorPage(props) {
  return (
    <main>
      <div
        style={{
          height: "25rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "auto", fontSize: "60pt" }}>404 - NOT FOUND</h1>
      </div>
    </main>
  );
}

export default ErrorPage;
