import React from "react";
import "../Css/Panigation.css";

class Panigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentPage, totalPages, handlePageChange } = this.props;

    return (
      <nav>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (number) => (
              <li
                key={number}
                className={
                  currentPage === number ? "page-item active" : "page-item"
                }
              >
                <a
                  onClick={() => handlePageChange(number)}
                  href="#"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    );
  }
}

export default Panigation;
