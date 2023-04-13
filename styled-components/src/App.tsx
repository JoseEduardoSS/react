import Header from "./components/header";
import { ThemeProvider } from "styled-components";
import {darkTheme, lightTheme} from "./components/UI/themes";
// @ts-ignore
import Container from "./Components/Container";
import { useState } from "react";
import { GlobalStyle } from "./components/GlobalStyle";
// @ts-ignore
import {ButtonTheme} from "./components/UI";
import SwitcherTheme from "./components/switcher-theme";

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyle />
        <ButtonTheme onClick={() => setTheme(!theme)}>
          <SwitcherTheme tema={theme}/>
        </ButtonTheme>
        <Header />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
