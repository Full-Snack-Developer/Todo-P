import PropTypes from "prop-types";
import React from "react";
import { FILTER } from "./Todo";
import "../Css/Item.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  handleButtonX = () => {
    const { deleteItem } = this.props;
    deleteItem(this.props.itemId);
  };

  handleCheckStatus = () => {
    const { checkstatus } = this.props;
    checkstatus(this.props.itemId);
  };

  render() {
    const { content, selectItem } = this.props;

    return (
      <div className="mainItem">
        <input type="checkbox" onClick={this.handleCheckStatus} />
        {content}
        <div>
          <button onClick={this.handleButtonX}>X</button>
          <button onClick={() => selectItem(this.props.itemId)}>EDIT</button>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  content: PropTypes.string,
  id: PropTypes.number,
  checkstatus: PropTypes.func,
  handleButtonX: PropTypes.func,
};
export default Item;
