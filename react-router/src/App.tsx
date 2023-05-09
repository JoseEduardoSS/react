import { GlobalStyle } from "./GlobalStyle";
import { ContextProvider } from "./common/context/context";
import AppRouter from "./routes";
import Menu from "./components/menu";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <GlobalStyle />
        <Menu />
        <AppRouter />
      </ContextProvider>
    </div>
  );
}

export default App;
