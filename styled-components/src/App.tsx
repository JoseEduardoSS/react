import Header from "./components/header";
// @ts-ignore
import Container from "./Components/Container";
import { useState } from "react";
import { GlobalStyle } from "./components/GlobalStyle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container />
    </>
  );
}

export default App;
