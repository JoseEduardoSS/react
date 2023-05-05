import Menu from './pages/menu';
import { GlobalStyle } from './GlobalStyle';
import { ContextProvider } from './common/context/context';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <GlobalStyle />
        <Menu />
      </ContextProvider>
    </div>
  );
}

export default App;
