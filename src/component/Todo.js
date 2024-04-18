import React from "react";
import PropTypes from "prop-types";
import { produce } from "immer";
import Todolist from "../component/Todolist";
import Footer from "../component/Footer";
import Input from "../component/Input";
import "../Css/Todo.css";
import { ThemeContext } from "../context/ThemeProvider";

export const FILTER = {
  ALL: "ALL",
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
};

class Todo extends React.Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
      filter: FILTER.ALL,
      filterList: {
        [FILTER.ALL]: [{}],
        [FILTER.ACTIVE]: [{}],
        [FILTER.COMPLETED]: [{}],
      },
    };
    this.dataRef = React.createRef();
  }

  addItem = (value) => {
    this.setState((prevState) =>
      produce(prevState, (newState) => {
        const newItem = {
          content: value,
          status: false,
          itemId: Math.floor(Math.random() * 1000),
        };
        newState.itemList.push(newItem);
      })
    );
  };

  deleteItem = (itemId) => {
    this.setState((prevState) =>
      produce(prevState, (newState) => {
        const indexToDelete = prevState.itemList.findIndex(
          (item) => itemId === item.itemId
        );
        if (indexToDelete !== -1) {
          newState.itemList.splice(indexToDelete, 1);
        }
      })
    );
  };

  checkstatus = (itemId) => {
    this.setState((prevState) =>
      produce(prevState, (newState) => {
        const { itemList } = newState;
        const itemIndex = itemList.findIndex((item) => item.id === itemId);
        if (itemIndex !== -1) {
          const newItemList = [...itemList];
          const updatedItem = { ...newItemList[itemIndex] };
          updatedItem.status = !updatedItem.status;
          newItemList[itemIndex] = updatedItem;
          newState.itemList = newItemList;

          const { filterList } = newState;
          if (updatedItem.status) {
            const activeIndex = filterList[FILTER.ACTIVE].findIndex(
              (item) => item.id === itemId
            );
            if (activeIndex !== -1) {
              filterList[FILTER.ACTIVE].splice(activeIndex, 1);
            }
            filterList[FILTER.COMPLETED].push(updatedItem);
          } else {
            const completedIndex = filterList[FILTER.COMPLETED].findIndex(
              (item) => item.id === itemId
            );
            if (completedIndex !== -1) {
              filterList[FILTER.COMPLETED].splice(completedIndex, 1);
            }
            filterList[FILTER.ACTIVE].push(updatedItem);
          }
        }
      })
    );
  };

  checkAllItem = () => {
    this.setState((prevState) =>
      produce(prevState, (newState) => {
        const newCheck = newState.itemList.every((item) => item.status);
        newState.itemList.forEach((item) => {
          item.status = !newCheck;
        });
      })
    );
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  updateItem = (updatedValue) => {
    this.setState((prevState) =>
      produce(prevState, (newState) => {
        const item = newState.itemList[FILTER.ALL].find(
          (item) => item.itemId === this.dataRef.current.state.itemId
        );
        const indexOfActive = newState.itemList[FILTER.ACTIVE].findIndex(
          (item) => item.itemId === this.dataRef.current.state.itemId
        );
        const indexOfCompleted = newState.itemList[FILTER.COMPLETED].findIndex(
          (item) => item.itemId === this.dataRef.current.state.itemId
        );
        if (item) {
          item.content = updatedValue;
          if (indexOfActive !== -1) {
            newState.itemList[FILTER.ACTIVE][indexOfActive].content =
              updatedValue;
          }
          if (indexOfCompleted !== -1) {
            newState.itemList[FILTER.COMPLETED][indexOfCompleted].content =
              updatedValue;
          }
        }
      })
    );
  };

  selectItem = (itemId) => {
    const item = this.state.itemList.find((item) => item.itemId === itemId);
    const content = item.content;
    this.dataRef.current.updateState(itemId, content);
  };

  render() {
    const { itemList, filter } = this.state;
    console.log(this.context);

    return (
      <ThemeContext>
        {(themes, changeTheme) => (
          <div style={themes.themeLight}>
            <div className="containerTodo">
              <h1 className="title">TODOS</h1>
              <Input
                className="inputTodo"
                addItem={this.addItem}
                itemList={itemList}
                checkAllItem={this.checkAllItem}
                updateItem={this.updateItem}
                ref={this.dataRef}
              />
              <Todolist
                className="todoList"
                itemList={itemList}
                deleteItem={this.deleteItem}
                checkstatus={this.checkstatus}
                checkAllItem={this.checkAllItem}
                selectItem={this.selectItem}
              />
              <Footer
                className="footer"
                setFilter={this.setFilter}
                filter={this.state.filter}
              />
              <button onClick={changeTheme}>Change Theme</button>
            </div>
          </div>
        )}
      </ThemeContext>
    );
  }
}

Todo.propTypes = {
  itemList: PropTypes.array,
  addItem: PropTypes.func,
  deleteItem: PropTypes.func,
  checkstatus: PropTypes.func,
  setFilter: PropTypes.func,
};

export default Todo;
