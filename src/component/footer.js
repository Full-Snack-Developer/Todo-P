import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { itemList, handleActive, handleFinished } = this.props;

    return (
      <p>
        Count: {itemList.length}
        <button onClick={handleActive}>Active</button>
        <button onClick={handleFinished}>Finished</button>
      </p>
    );
  }
}
export default Footer;
