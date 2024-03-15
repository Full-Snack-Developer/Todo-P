import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { itemList } = this.props;
    return <p>Count: {itemList.length}</p>;
  }
}
export default Footer;
