import "./App.css";
import Home from "./Home";
import BottomNav from "./BottomNav";
import Product from "./Product";
import Payment from "./Payment";
import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Process from "./Process";
import Success from "./Success";

function App() {

  

  return (
    <div className="relative max-w-[400px] mx-auto">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home /> <BottomNav />
              </>
            }

          />
          <Route path="/product" element={<Product/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/process" element={<Process/>}/>
          <Route path="/success" element={<Success/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
