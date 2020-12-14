import './App.css';
import { ThemeProvider } from 'styled-components';

import InputText from './inputText';
import React, { Component } from 'react';
import { signupFormLightTheme, signupFormDarkTheme } from './theme';

import SignUpButton from './SignUpButton';
import { GlobalStyle } from './GlobalStyle';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: "",
      theme: 'signupFormLightTheme',
    };

  }

  toggleTheme = () => {
    if (this.state.theme === 'signupFormLightTheme') {
      this.setState({
        inputText: this.state.inputText,
        theme: "signupFormDarkTheme",
      });
    } else {
      this.setState({
        inputText: this.state.inputText,
        theme: "signupFormLightTheme",
      });
    }
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme === 'signupFormLightTheme' ? signupFormLightTheme : signupFormDarkTheme}>
        <GlobalStyle/>
          <div className="App">
            <InputText />
            <SignUpButton theme={this.state.theme} toggleTheme={this.toggleTheme}/>
          </div>
      </ThemeProvider>
    );
  }
}


export default App;
