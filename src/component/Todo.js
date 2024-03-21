import React from "react";

//
import Todolist from "./Todolist";
import Input from "./Input";
import Footer from "./footer";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
    };
  }

  addItem = (newItem) => {
    const { itemList } = this.state;
    const newItemList = [newItem, ...itemList];
    this.setState({
      itemList: newItemList,
    });
  };

  deleteItem = (id) => {
    this.setState((prevState) => ({
      itemList: prevState.itemList.filter((item) => item.id !== id),
    }));
  };

  checkedItem = () => {
    this.setState((prevState) => ({
      itemList: prevState.itemList.map((item) => ({
        ...item,
        check: !item.check,
      })),
    }));
  };

  editItem = (id, newContent) => {
    this.setState((prevState) => ({
      itemList: prevState.itemList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            content: newContent,
          };
        }
        return item;
      }),
    }));
  };

  checkAll = () => {};

  handleActive = () => {};

  handleFinished = () => {};

  render() {
    const { itemList } = this.state;
    const h1Style = {
      fontSize: "40px",
    };
    const myStyle = {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    };
    const contentStyle = {
      display: "flex",
      flexDirection: "column",
      // alignItems: "center",
      gap: "10px",
    };

    return (
      <div style={myStyle}>
        <h1 style={h1Style}>Todos</h1>
        <div style={contentStyle}>
          <Input
            addItem={this.addItem}
            itemList={itemList}
            checkAll={this.checkAll}
          />
          <Todolist
            itemList={itemList}
            deleteItem={this.deleteItem}
            checkedItem={this.checkedItem}
            editItem={this.editItem}
          />
          <Footer
            itemList={itemList}
            handleActive={this.handleActive}
            handleFinished={this.handleFinished}
          />
        </div>
      </div>
    );
  }
}
export default Todo;
