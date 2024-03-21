import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    checkedItem(item.check);
    this.setState((prevState) => ({
      check: !prevState.check, // cập nhật trạng thái của checkbox
    }));
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
    this.setState({ isEditing: false });
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
          checked={this.state.check}
          onClick={this.handleChecked}
        />
        {this.state.isEditing ? ( // toán tử 3 ngôi kiểm tra isEditing
          <input
            type="text"
            value={content}
            onChange={this.handleEditChange}
            onBlur={this.handleEditSubmit}
            autoFocus
          />
        ) : (
          <div
            style={{
              textDecoration: this.state.check ? "line-through" : "none", //toán tử 3 ngôi kiểm tra check
            }}
            onClick={this.handleFocus}
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
