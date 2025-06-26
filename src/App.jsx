import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TodoPage from "./pages/todo-page/TodoPage";
import AboutPage from "./pages/about-page/AboutPage";
import Header from "./components/header/HeaderComponent";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
