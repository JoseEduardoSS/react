import { GlobalStyle } from "./GlobalStyle";
import { ContextProvider } from "./common/context/context";
import AppRouter from "./routes";

function App() {
  return (
    <div>
      <ContextProvider>
        <GlobalStyle />
        <AppRouter />
      </ContextProvider>
    </div>
  );
}

export default App;
