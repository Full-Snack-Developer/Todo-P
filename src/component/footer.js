import React from "react";
import { FILTER } from "./Todo";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: FILTER.ALL,
    };
  }

  handleBtn = (filter) => {
    const { filterList } = this.props;
    this.setState({ selected: filter });
    filterList(filter);
    console.log(filterList);
  };

  render() {
    const { itemList } = this.props;
    return (
      <p>
        Count: {itemList.length}
        <button onClick={() => this.handleBtn(FILTER.DOING)}>Active</button>
        <button onClick={() => this.handleBtn(FILTER.DONE)}>Finished</button>
      </p>
    );
  }
}

export default Footer;
