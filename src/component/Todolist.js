import React from "react";
//
import "../component/Item.js";
import Item from "../component/Item.js";

class Todolist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { itemList } = this.props;
    const { deleteItem } = this.props;
    const { checkedItem } = this.props;
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
            />
          );
        })}
      </div>
    );
  }
}
export default Todolist;
