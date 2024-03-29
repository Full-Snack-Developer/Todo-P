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
    this.state = {
      list: this.props.itemList,
      // value: "",
      // check: this.props.itemList.check,
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
      // const { value } = this.state;
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

  render() {
    return (
      <label style={labelStyle}>
        <input
          style={myStyle}
          className="inputStyle"
          // value={this.state.value}
          // onChange={this.handdleInput}
          onKeyDown={this.handdleKeyDown}
          placeholder="Type something..."
        />
      </label>
    );
  }
}

export default Input;
