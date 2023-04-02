import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login";
import Feira from "./pages/Feira";
import Carrinho from "./pages/Carrinho";
import {ContextProvider} from "./common/context/Context";

function Router() {
    return (
        <BrowserRouter>
            <ContextProvider>
                <Routes>
                    <Route exact path="/" element={<Login/>}/>
                    <Route path="/feira" element={<Feira/>}/>
                    <Route exact path="/carrinho" element={<Carrinho/>}/>
                </Routes>
            </ContextProvider>
        </BrowserRouter>
    )
}

export default Router;