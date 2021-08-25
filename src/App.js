import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <Navbar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
