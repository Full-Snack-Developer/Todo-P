import React from "react";
import propTypes from "prop-types";
import Item from "../component/Item";
import { FILTER } from "./Todo";
import InfiniteScroll from "../component/InfiniteScroll.js";

const itemsPerPage = 5;
class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };

    this.data1ref = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollToEnd);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScrollToEnd);
  }

  handleScrollToEnd = () => {
    const { itemList } = this.props;
    const { page } = this.state;
    const lastItem = page * itemsPerPage;
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      lastItem < itemList.length
    ) {
      setTimeout(() => {
        this.setState((prevState) => ({
          page: prevState.page + 1,
        }));
      }, 1000);
    }
  };

  render() {
    const { itemList, deleteItem, checkstatus, filterList, filter } =
      this.props;
    const { page } = this.state;
    const indexOfLastItem = page * itemsPerPage;
    const currentItems = itemList.slice(0, indexOfLastItem);

    return (
      <div className="mainTodolist">
        {currentItems.map((item) => (
          <Item
            ref={this.data1ref}
            key={item.itemId}
            itemId={item.itemId}
            status={item.status}
            content={item.content}
            deleteItem={deleteItem}
            checkstatus={checkstatus}
            selectItem={this.props.selectItem}
          />
        ))}
      </div>
    );
  }
}

Todolist.propTypes = {
  itemList: propTypes.array.isRequired,
  deleteItem: propTypes.func.isRequired,
  checkstatus: propTypes.func.isRequired,
  checkAllItem: propTypes.func.isRequired,
};

export default Todolist;
