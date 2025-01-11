import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import OurVideoPage from "./pages/OurVideoPage";
import AboutUSPage from "./pages/AboutUsPage";
import FaqPage from "./pages/FaqPage";
import ReqAnsBuyPage from "./pages/ReqAndBuyPage";

function App() {
  return (
    <div>
      <NavbarComponent />

      {/* Awal Content */}
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/ourvideo" Component={OurVideoPage} />
        <Route path="/aboutus" Component={AboutUSPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/reqandbuy" Component={ReqAnsBuyPage} />
      </Routes>
      {/* Akhir Content */}

      <FooterComponent />
    </div>
  );
}

export default App;
