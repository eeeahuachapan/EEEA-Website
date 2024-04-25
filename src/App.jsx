import Facilities from "./pages/facilities/Facilities"
import Home from "./pages/home/Home"
import Calendar from "./pages/calendar/Calendar"
import AboutUs from "./pages/aboutUs/AboutUs"
import Events from "./pages/events/Events"
import ContactUs from "./pages/contactUs/ContactUs"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" Component={Home} />
        <Route path="/AboutUs" Component={AboutUs} />
        <Route path="/Facilities" Component={Facilities} />
        <Route path="/Calendar" Component={Calendar} />
        <Route path="/Events" Component={Events} />
        <Route path="/ContactUs" Component={ContactUs} />
        <Route path="/*" Component={Home} />
        
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
