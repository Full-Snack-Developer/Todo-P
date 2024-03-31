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
    const { itemList, deleteItem, checkedItem, editItem, filter } = this.props;
    const { currentPage, pageSize } = this.state;

    let filterItem = itemList;
    if (filter === FILTER.DOING) {
      filterItem = itemList.filter((item) => !item.check);
    } else if (filter === FILTER.DONE) {
      filterItem = itemList.filter((item) => item.check);
    }

    const startIndex = Math.max((currentPage - 1) * pageSize, 0);
    const endIndex = Math.min(startIndex + pageSize, filterItem.length);
    const currentPageItems = filterItem.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filterItem.length / pageSize);

    return (
      <div className="todolist-container">
        <div className="button-container">
          <button onClick={this.handleClickBtn}>ALL</button>
        </div>
        <div className="item-container">
          {currentPageItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              checkedItem={checkedItem}
              editItem={editItem}
            />
          ))}
        </div>
        <Panigation
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Todolist;
