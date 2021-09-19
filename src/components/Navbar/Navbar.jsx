import { resetCart, selectCart } from "features/cart/cartSlice";
import { logOut, selectCurrentUser } from "features/session/sessionSlice";
import React from "react";
import { TiShoppingCart, TiDeleteOutline } from "react-icons/ti";
import { CgMenuGridR } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.scss";
import { STORE_NAME } from "utils/static";

function Navbar() {
  const currentUser = useSelector(selectCurrentUser);
  const items = useSelector(selectCart);
  const dispatch = useDispatch();
  const history = useHistory();

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const handleLogout = (e) => {
    dispatch(logOut());
    dispatch(resetCart());
    setNavbarOpen(!navbarOpen);
    history.push("/");
  };

  return (
    <>
      <header className="sticky">
        <div className="navbar">
          <div className="container">
            <Link to="/" className="navbar__logo">
              {STORE_NAME}
            </Link>

            <div className="navbar__links">
              <Link to="/" className="navbar__link">
                Home
              </Link>
              <Link to="/books" className="navbar__link">
                List of Books
              </Link>
              <Link to="/cart" className="navbar__cart">
                {items.length !== 0 && (
                  <span className="navbar__cart-count">{items.length}</span>
                )}
                <TiShoppingCart fontSize="20pt" />
              </Link>
              {currentUser.username ? (
                <>
                  <Link to="/profile" className="navbar__user">
                    <img
                      src={require("assets/images/maleAvatar.png").default}
                      alt=""
                      className="navbar__user-avt"
                    />
                    <span className="navbar__user-name">username</span>
                  </Link>
                  <button className="navbar__btn" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login">
                  <button className="navbar__btn">Sign in</button>
                </Link>
              )}
            </div>

            <div className="navbar__hidden">
              <CgMenuGridR
                fontSize="20pt"
                onClick={() => setNavbarOpen(!navbarOpen)}
              />
            </div>
          </div>
        </div>
      </header>

      {navbarOpen && (
        <div className="navbar__hidden menu-hidden">
          <div
            className="menu-hidden-close"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <TiDeleteOutline fontSize="30pt" />
          </div>
          <Link
            to="/"
            className="menu-hidden-link"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            Home
          </Link>
          <hr />
          <Link
            to="/books"
            className="menu-hidden-link"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            List of Books
          </Link>
          <hr />
          {currentUser.username ? (
            <>
              <Link
                to="/profile"
                className="navbar__user menu-hidden-link"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <img
                  src={require("assets/images/maleAvatar.png").default}
                  alt=""
                  className="navbar__user-avt"
                />
                <span className="navbar__user-name">username</span>
              </Link>
              <hr />
              <button className="navbar__btn " onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" onClick={() => setNavbarOpen(!navbarOpen)}>
              <button className="navbar__btn">Sign in</button>
            </Link>
          )}
        </div>
      )}

      <Link to="/cart" className="navbar__cart-hidden navbar__hidden">
        <div className="navbar__cart">
          {items.length !== 0 && (
            <span className="navbar__cart-count">{items.length}</span>
          )}
          <TiShoppingCart fontSize="20pt" />
        </div>
      </Link>
    </>
  );
}

export default Navbar;
