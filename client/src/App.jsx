import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Landingpage from "./pages/Landingpage/Landingpage";
import Details from "./pages/Details/Details";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <hr />
        <Routes>
          <Route index path="/" element={<Landingpage />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
