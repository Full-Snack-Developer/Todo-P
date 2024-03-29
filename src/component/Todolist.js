import React from "react";

//
import "../component/Item.js";
import Item from "../component/Item.js";
import { FILTER } from "./Todo.js";

const myStyle = {
  gap: "5px",
};

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // list: this.props.itemList,
    };
  }

  handleClickBtn = () => {
    const { checkAll, itemList } = this.props;
    checkAll();
    console.log(itemList);
  };

  render() {
    const { itemList, deleteItem, checkedItem, editItem, filter } = this.props;

    let filterItem = itemList;
    if (filter === FILTER.DOING) {
      console.log("doing");
      filterItem = itemList.filter((item) => !item.check);
      console.log(itemList);
    } else if (filter === FILTER.DONE) {
      console.log("done");
      filterItem = itemList.filter((item) => item.check);
      console.log(itemList);
    }
    return (
      <div style={myStyle}>
        <div>
          <button onClick={this.handleClickBtn}>ALL</button>
        </div>
        {filterItem.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              itemList={itemList}
              checkedItem={checkedItem}
              editItem={editItem}
            />
          );
        })}
      </div>
    );
  }
}
export default Todolist;
