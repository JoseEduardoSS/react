import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cardapio from "./pages/cardapio";
import Menu from "./components/menu";
import Header from "./components/DefaultPage";
import DefaultPage from "./components/DefaultPage";
import Home from "./pages/home";

const AppRouter = () => {
  return (
    <main>
      <Router>
        <Menu />
        <Header />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Cardapio />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
};

export default AppRouter;
