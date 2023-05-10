import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cardapio from "./pages/cardapio";
import Menu from "./components/menu";
import DefaultPage from "./components/DefaultPage";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./components/Footer";
import NotFound from "./pages/notFound";

const AppRouter = () => {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Cardapio />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default AppRouter;
