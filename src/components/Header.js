import React from "react";
import MyContext from "../context/context";

function Header() {
  const modalContext = React.useContext(MyContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark mb-2">
      <div className="container">
        <span className="navbar-brand">ToDo</span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Dropdown
              </a>
            </li> */}
          </ul>

          {modalContext.userData.uid ? (
            <div>
              <span className="mr-1 text-white">{modalContext.userData.email}</span>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="button"
                onClick={() => {
                  // if (e.target === e.currentTarget) {
                  modalContext.signOut();
                  // }
                }}
              >
                Sign out
              </button>
            </div>
          ) : (
            <div>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="button"
                onClick={(e) => {
                  // if (e.target === e.currentTarget) {
                  modalContext.setShowModal(!modalContext.showModal);
                  // }
                }}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-people-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
