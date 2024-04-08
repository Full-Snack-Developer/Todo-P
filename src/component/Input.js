import React from "react";
import propTypes from "prop-types";
import produce from "immer";
import "../Css/Input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: null,
      isCheckedAll: this.props.status,
    };
    this.inputRef = React.createRef();
  }

  handleEnter = (e) => {
    if (e.key === "Enter") {
      if (this.state.itemId) {
        this.props.updateItem(this.inputRef.current.value);
      } else {
        this.props.addItem(this.inputRef.current.value);
      }
      this.inputRef.current.value = "";
      this.setState({ itemId: null });
    }
  };

  updateState = (itemId, content) => {
    this.setState((prevState) =>
      produce(prevState, (newState) => {
        newState.itemId = itemId;
      })
    );
    this.inputRef.current.value = content;
    this.inputRef.current.focus();
  };

  handleBtnCheckALL = () => {
    const { checkAllItem } = this.props;
    checkAllItem();
  };
  render() {
    console.log(this.inputRef.current);
    // console.log(this.inputRef.current.value);

    return (
      <div className="mainInput">
        <input
          className="inputInput"
          placeholder="type something"
          onKeyDown={this.handleEnter}
          ref={this.inputRef}
        />
        <button className="btnInput" onClick={this.handleBtnCheckALL}>
          CHECK
        </button>
      </div>
    );
  }
}

Input.propTypes = {
  handleEnter: propTypes.func,
  updateState: propTypes.func,
  handleBtnCheckALL: propTypes.func,
};
export default Input;
