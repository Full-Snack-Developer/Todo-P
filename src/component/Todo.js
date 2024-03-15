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

  checkedItem = (isChecked) => {
    this.setState({ check: isChecked ? false : true });
  };

  render() {
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
      alignItems: "center",
      gap: "10px",
    };

    const { itemList } = this.state;
    return (
      <div style={myStyle}>
        <h1 style={h1Style}>Todos</h1>
        <div style={contentStyle}>
          <Input addItem={this.addItem} />
          <Todolist
            itemList={itemList}
            deleteItem={this.deleteItem}
            checkedItem={this.checkedItem}
          />
          <Footer itemList={itemList} />
        </div>
      </div>
    );
  }
}
export default Todo;
