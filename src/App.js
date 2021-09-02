import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { GlobalProvider } from "./Context/GlobalContext";



function App() {

  return (
    <GlobalProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <Header />
          <Navbar />
          <Main />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
