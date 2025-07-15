import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Football from "./components/pages/footbal/Football";
import Basketball from "./components/pages/basketball/Basketball";
import Home from "./components/pages/home/Home";
import PageNotFound from "./components/partials/PageNotFound";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<PageNotFound/>} />
          <Route path="/" element={<Home />} />
          <Route path="/football" element={<Football />} />
          <Route path="/basketball" element={<Basketball />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
