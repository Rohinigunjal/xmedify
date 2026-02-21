import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import DownloadApp from "./Components/Sections/DownloadApp/DownloadApp";
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  return (
    <>
    <CssBaseline />
    <Outlet />    
    <DownloadApp /> 
    <Footer />
    </>
  );
}

export default App;