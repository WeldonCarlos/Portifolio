
import Header from "./Components/Header";
import RotasScroll from "./Rotas";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
  
     <BrowserRouter>
      <ToastContainer autoClose={3000}/>
         <Header/>
         <RotasScroll/>
      </BrowserRouter>
  );
}

export default App;
