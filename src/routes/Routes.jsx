import { Route, Routes } from "react-router";
import HomePage from "../pages/homePage/HomePage";
import AboutPage from "../pages/aboutPage/AboutPage";
import ContactPage from "../pages/contactPage/ContactPage";
import ExpertisePage from "../pages/expertisePage/ExpertisePage";
import MyworksPage from "../pages/myworksPage/MyworksPage";
import QualificationPage from "../pages/qualificationPage/QualificationPage";

const RouteComponent = () => {
  return (
    <Routes>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="expertise" element={<ExpertisePage />} />
    <Route path="works" element={<MyworksPage />} />
    <Route path="qualification" element={<QualificationPage />} />
    </Routes>
  )
}

export default RouteComponent