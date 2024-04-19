import React from "react";
import PropTypes from "prop-types";

class InfiniteScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    this.scrollRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { isLoading } = this.state;
    const { onLoadMore } = this.props;
    if (isLoading) return;

    const scrollRef = this.scrollRef.current;
    if (
      scrollRef &&
      window.innerHeight + window.scrollY >=
        scrollRef.offsetTop + scrollRef.clientHeight
    ) {
      this.setState({ isLoading: true }, () => {
        onLoadMore().then(() => {
          this.setState({ isLoading: false });
        });
      });
    }
  }

  render() {
    const { isLoading } = this.state;
    const { children } = this.props;

    return (
      <div ref={this.scrollRef}>
        {children}
        {isLoading && <div>Loading...</div>}
      </div>
    );
  }
}

InfiniteScroll.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default InfiniteScroll;
