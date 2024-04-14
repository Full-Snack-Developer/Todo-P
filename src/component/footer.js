import React from "react";
import { FILTER } from "./Todo";
import propTypes from "prop-types";
import "../Css/Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleBTN = (e) => {
  //   this.props.setFilter(e.target.name);
  // };
  render() {
    return (
      <div className="mainFooter">
        <button className="btnAll" name={FILTER.ALL}>
          ALL
        </button>
        <button
          className="btnActive"
          name={FILTER.ACTIVE}
          // onClick={this.handleBTN}
        >
          ACTIVE
        </button>
        <button
          className="btnFinished"
          name={FILTER.COMPLETED}
          // onClick={this.handleBTN}
        >
          COMPLETED
        </button>
      </div>
    );
  }
}

Footer.propTypes = {
  setFilter: propTypes.func.isRequired,
  // filter: propTypes.oneOf([FILTER.ALL, FILTER.ACTIVE, FILTER.COMPLETED])
  //   .isRequired,
  handleBTN: propTypes.func.isRequired,
};

export default Footer;
