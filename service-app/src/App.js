
import "./index.css";
import Routers from "./router/Routers";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer,  Bounce } from 'react-toastify'; // Import Bounce transition
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000"; 
axios.defaults.withCredentials = true;








function App() {
  return (
    <div className="min-h-screen bg-custom-bg bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-80"></div> {/* Overlay */}
      <div className="relative flex items-center justify-center h-screen">

    <div>
    <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        transition={Bounce} // Use Bounce transition here
        pauseOnHover
        theme="dark"
      />
       <Routers />
    
      
    </div>
    </div>
    </div>
  );
}

export default App;

