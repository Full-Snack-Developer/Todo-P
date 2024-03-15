import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { check: true };
  }
  render() {
    const { item } = this.props;
    const { deleteItem } = this.props;
    const { checkedItem } = this.props;
    const { itemList } = this.props;
    const myStyle = {
      height: "30px",
      width: "300px",
      border: "2px solid rgba(0, 0, 0, 0.55)",
      borderRadius: "5px",
      // padding: "5px",
    };
    const myStyle2 = {
      display: "flex",
      alignItem: "center",
      alignContent: "center",
      justifyContent: "space-around",
    };

    const handleDelete = () => {
      deleteItem(item.id);
      console.log(checkedItem);
      console.log(deleteItem);
    };

    const handleChecked = (item) => {
      checkedItem(item.check);
    };
    return (
      <div style={myStyle}>
        <div style={myStyle2}>
          <input
            type="checkbox"
            checked={itemList.check}
            onClick={handleChecked}
          />
          {item.content} {item.status}
          <span>
            <button onClick={handleDelete}>X</button>
          </span>
        </div>
      </div>
    );
  }
}
export default Item;
