import React, { PureComponent } from "react";

class Item extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      check: this.props.item.check,
      content: this.props.item.content,
      isEditing: false,
    };
  }

  handleDelete = () => {
    const { item, deleteItem } = this.props;
    deleteItem(item.id);
  };

  handleChecked = () => {
    const { item, checkedItem } = this.props;
    checkedItem(item.id, !item.check);
    this.setState(() => ({
      check: !item.check,
    }));
    console.log("Giá trị mới nhất của check:", this.state.check);
  };

  handleFocus = () => {
    this.setState({ isEditing: true });
  };

  handleEditChange = (e) => {
    const newContent = e.target.value;
    this.setState({ content: newContent });
  };

  handleEditSubmit = () => {
    const { item, editItem } = this.props;
    const { content } = this.state;
    editItem(item.id, content);
  };

  handleItemClick = (content) => {
    this.props.onItemClick(content);
  };

  render() {
    const { content } = this.state;
    const { item } = this.props;
    return (
      <div
        style={{
          width: "300px",
          height: "50px",
          marginBottom: "5px",
          display: "flex",
          alignItems: "center",
          border: "1px solid",
          borderRadius: "4px",
          boxSizing: "border-box",
          justifyContent: "space-around",
        }}
      >
        <input
          type="checkbox"
          checked={this.props.item.check}
          onChange={this.handleChecked}
        />
        {this.state.isEditing ? ( // toán tử 3 ngôi kiểm tra isEditing
          <input
            type="text"
            value={content}
            onChange={this.handleEditChange}
            onBlur={this.handleEditSubmit}
            autoFocus
            onClick={this.handleItemClick}
          />
        ) : (
          <div
            key={item.id}
            style={{
              textDecoration: this.state.check ? "line-through" : "none",
            }}
            onClick={() => this.handleItemClick(item.content)}
          >
            {item.content}
          </div>
        )}
        <button onClick={this.handleDelete}>X</button>
      </div>
    );
  }
}
export default Item;
