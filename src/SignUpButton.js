import React from 'react';
import styled from "styled-components";

const Button = styled.button`
background: ${({ theme }) => theme.buttonDarkModeColor};
color: ${({ theme }) => theme.text};
`;

const SignUpButton = ({theme, toggleTheme}) => {
    let labelButton = [theme === 'signupFormLightTheme' ? 'Login' : 'Logoff'].join(' ');
      return (
          <Button onClick={toggleTheme} >
            {labelButton}
          </Button>
      );
  };


  export default SignUpButton;