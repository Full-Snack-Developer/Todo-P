import React from "react";
//
import "../component/Item.js";
import Item from "../component/Item.js";

class Todolist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { itemList, deleteItem, checkedItem, editItem } = this.props;
    const myStyle = {
      gap: "5px",
    };

    return (
      <div style={myStyle}>
        {itemList.map((item) => {
          return (
            <Item
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
