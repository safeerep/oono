import { Routes, Route } from "react-router-dom";
import { Home, NotFound } from "./pages/buyer";
import BuyerLayout from "./components/buyer/Layout";

const App = () => {
    return (
        <Routes>
            <Route element={<BuyerLayout />}>
                <Route path="/" element={<Home />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;