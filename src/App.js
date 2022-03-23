import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Description from "./components/Description";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav"
import Blogs from "./components/Blogs";
import Maps from "./components/Maps";
import "mapbox-gl/dist/mapbox-gl.css";
function App() {
    return (
        <>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/map" element={<Maps />} />
        <Route path="/description/:id" element={<Description />} />
        </Routes>
        <BottomNav/>
        </>
    );
}

export default App;
