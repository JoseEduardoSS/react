import { GlobalStyle } from "./GlobalStyle";
import { ContextProvider } from "./common/context/context";
import AppRouter from "./routes";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <GlobalStyle />
        <AppRouter />
      </ContextProvider>
    </div>
  );
}

export default App;
