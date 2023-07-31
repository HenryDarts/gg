import "./App.scss";
import Gallery from "./pages/gallery/Gallery";
import Club from "./pages/club/Club";
import News from "./pages/news/News";
import NewsOpen from "./pages/newsOpen/NewsOpen";
import Main from "./pages/main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/team/Team";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:newsId" element={<NewsOpen />} />
          <Route path="/club" element={<Club />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
