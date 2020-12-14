import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle `

body {
    background: ${({ theme }) => theme.body};
}

button{
    background-color: ${({ theme }) => theme.buttonBackgroundColor};
    color: ${({ theme }) => theme.text};
}

h1 {
    color: ${({ theme }) => theme.text}; 
}


`;