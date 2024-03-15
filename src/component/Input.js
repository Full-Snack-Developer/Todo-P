import React from "react";

//
import Item from "./Item";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
    const handdleInput = (e) => {
      const { value } = e.target;
      this.setState({
        value,
      });
    };

    const handdleKeyDown = (e) => {
      if (e.key === "Enter") {
        const { value } = this.state;
        const { addItem } = this.props;
        const newItem = {
          id: Math.floor(Math.random() * 1000),
          content: value,
          check: false,
        };
        addItem(newItem);
        this.setState({
          value: "",
        });
      }
    };

    const myStyle = {
      height: "30px",
      width: "300px",
      border: "2px solid rgba(0, 0, 0, 0.55)",
      borderRadius: "5px",
      padding: "10px",
    };

    return (
      <label>
        <input
          style={myStyle}
          className="inputStyle"
          onChange={handdleInput}
          onKeyDown={handdleKeyDown}
          placeholder="Type something..."
        />
      </label>
    );
  }
}
export default Input;
