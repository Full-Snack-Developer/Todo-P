import React from "react";
import Todolist from "./Todolist";
import Input from "./Input";
import Footer from "./footer";
//
import Pagination from "./Panigation";
export const FILTER = {
  ALL: "ALL",
  DOING: "DOING",
  DONE: "DONE",
  ALLS: "ALLS",
};

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
  gap: "10px",
};

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      itemList: [],
      filter: "",
    };
  }

  addItem = (newItem) => {
    const { itemList } = this.state;
    const newItemList = [newItem, ...itemList];
    this.setState({
      itemList: newItemList,
      selectedItemContent: "",
    });
  };

  deleteItem = (id) => {
    this.setState((prevState) => ({
      itemList: prevState.itemList.filter((item) => item.id !== id),
    }));
  };

  checkedItem = (id, newCheck) => {
    this.setState((prevState) => ({
      itemList: prevState.itemList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            check: newCheck,
          };
        }
        return item;
      }),
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
      selectedItem: null,
    }));
  };

  filterList = (filter) => {
    this.setState({ filter });
  };

  checkAll = () => {
    const newCheck = this.state.itemList.every((item) => item.check);
    this.setState((prevState) => ({
      itemList: prevState.itemList.map((item) => ({
        ...item,
        check: !newCheck,
      })),
    }));
  };

  handleItemClick = (content) => {
    this.setState({ selectedItemContent: content });
  };
  render() {
    return (
      <div style={myStyle}>
        <h1 style={h1Style}>Todos</h1>
        <div style={contentStyle}>
          <Input
            addItem={this.addItem}
            itemList={this.state.itemList}
            ref={(input) => (this.inputRef = input)}
            onItemClick={this.handleItemClick}
            selectedItemContent={this.state.selectedItemContent}
          />
          <Todolist
            itemList={this.state.itemList}
            deleteItem={this.deleteItem}
            checkedItem={this.checkedItem}
            editItem={this.editItem}
            filter={this.state.filter}
            checkAll={this.checkAll}
            onItemClick={this.handleItemClick}
          />
          <Footer itemList={this.state.itemList} filterList={this.filterList} />
        </div>
      </div>
    );
  }
}

export default Todo;
