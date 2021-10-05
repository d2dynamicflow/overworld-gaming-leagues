import { BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import { Slide, ToastContainer } from 'react-toastify';
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import './ReactToastify.css';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <Header />
          <Navbar />
          <Main />
          <ToastContainer
            toastClassName="toastifyToastContainer"
            position="bottom-right"
            autoClose={ 5 * 1000 }
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={ false }
            pauseOnFocusLoss
            draggable
            pauseOnHover
            limit={ 5 }
            transition={ Slide }
          />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
