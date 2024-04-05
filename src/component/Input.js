import React from "react";
// import { FILTER } from "./Todo";

const myStyle = {
  height: "30px",
  width: "275px",
  border: "2px solid rgba(0, 0, 0, 0.55)",
  borderRadius: "5px",
  padding: "10px",
};

const styleBtn = {
  height: "50px",
  with: "80px",
  borderRadius: "5px",
};

const labelStyle = {
  display: "flex",
  columnGap: "3px",
};

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const { value } = this.state;
      const { addItem, editItem, selectedItem } = this.props;
      if (selectedItem) {
        editItem(selectedItem.id, value);
      } else {
        const newItem = {
          id: Math.floor(Math.random() * 1000),
          content: value,
          check: false,
        };
        addItem(newItem);
      }
      this.setState({ value: "" });
    }
  };

  // Cập nhật giá trị của ô input khi selectedItemContent thay đổi
  componentDidUpdate(prevProps) {
    if (prevProps.selectedItemContent !== this.props.selectedItemContent) {
      this.setState({ value: this.props.selectedItemContent });
    }
  }

  render() {
    const { value } = this.state;
    return (
      <label style={labelStyle}>
        <input
          style={myStyle}
          className="inputStyle"
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
          value={value}
          placeholder="Type something..."
          ref={this.inputRef}
        />
      </label>
    );
  }
}

export default Input;
