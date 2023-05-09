import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home/index.js';
import Cardapio from './pages/cardapio/index.js';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Cardapio />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;