import React from "react";
import Item from "../component/Item.js";
import Panigation from "./Panigation";
import { FILTER } from "./Todo.js";
import "../Css/Todolist.css";

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageSize: 5,
    };
  }

  handleClickBtn = () => {
    const { checkAll } = this.props;
    checkAll();
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { itemList, deleteItem, checkedItem, editItem, filter, onItemClick } =
      this.props;

    let filterItem = itemList;
    if (filter === FILTER.DOING) {
      filterItem = itemList.filter((item) => !item.check);
    } else if (filter === FILTER.DONE) {
      filterItem = itemList.filter((item) => item.check);
    }

    return (
      <div className="todolist-container">
        <div className="button-container">
          <button onClick={this.handleClickBtn}>CHECK ALL</button>
        </div>
        <div className="item-container">
          {filterItem.map((item) => (
            <Item
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              checkedItem={checkedItem}
              editItem={editItem}
              onItemClick={onItemClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Todolist;
