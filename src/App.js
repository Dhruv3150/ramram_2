import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

import "./Style/App.scss";
import "./Style/Header.scss";
import "./Style/Home.scss";
import "./Style/footer.scss";
import "./Style/Contact.scss";
import "./Style/Mediaquery.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
