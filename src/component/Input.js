import React from "react";
import { FILTER } from "./Todo";

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
      list: this.props.itemList,
    };
  }

  handdleInput = (e) => {
    const { value } = e.target;
    this.setState({
      value,
    });
  };

  handdleKeyDown = (e) => {
    if (e.key === "Enter") {
      const { addItem } = this.props;
      const newItem = {
        id: Math.floor(Math.random() * 1000),
        content: e.target.value,
        check: false,
      };
      addItem(newItem);
      e.target.value = "";
    }
  };

  // Hàm để cập nhật nội dung của Item được chọn và hiển thị nó trong ô input
  componentDidUpdate(prevProps) {
    if (prevProps.selectedItemContent !== this.props.selectedItemContent) {
      this.inputRef.current.value = this.props.selectedItemContent; // Cập nhật giá trị của ô input
    }
  }

  render() {
    return (
      <label style={labelStyle}>
        <input
          style={myStyle}
          className="inputStyle"
          onKeyDown={this.handdleKeyDown}
          placeholder="Type something..."
          ref={this.inputRef}
        />
      </label>
    );
  }
}

export default Input;
