import Facilities from "./pages/facilities/Facilities"
import Home from "./pages/home/Home"
import Calendar from "./pages/calendar/Calendar"
import AboutUs from "./pages/aboutus/AboutUs"
import Events from "./pages/events/Events"
import ContactUs from "./pages/contactUs/ContactUs"
import AcademicOffer from "./pages/academicOffer/AcademicOffer"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" Component={Home} />
        <Route path="/sobre-nosotros" Component={AboutUs} />
        <Route path="/oferta-academica" Component={AcademicOffer} />
        <Route path="/instalaciones" Component={Facilities} />
        <Route path="/calendario-academico" Component={Calendar} />
        <Route path="/eventos" Component={Events} />
        <Route path="/contactenos" Component={ContactUs} />
        <Route path="/*" Component={Home} />
        
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
