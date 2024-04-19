import React, { Children } from "react";
import produce from "immer";

export const theme = {
  themeLight: {
    color: "black",
    background: "white",
  },

  themeDark: {
    color: "white",
    background: "black",
  },
};

export const ThemeContext = React.createContext({
  themes: theme,
  changeTheme: () => {},
});

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themes: theme.themeLight,
    };
  }

  changeTheme = () => {
    this.setState(
      (prevState) => ({
        themes:
          prevState.themes === theme.themeDark
            ? theme.themeLight
            : theme.themeDark,
      }),
      () => {
        const { themes } = this.state;
        document.body.style.setProperty(
          "background-color",
          themes.background,
          "important"
        );
      }
    );
    console.log("test");
  };
  render() {
    const { themes } = this.state;
    const { children } = this.props;
    return (
      <ThemeContext.Consumer value={{ themes, changeTheme: this.changeTheme }}>
        {children}
      </ThemeContext.Consumer>
    );
  }
}
export default ThemeProvider;
