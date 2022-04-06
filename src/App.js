import { Routes, Route } from "react-router-dom";
// components
import Footer from "./components/Footer";

// pages
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import TechAcademy from "./pages/TechAcademy";
import BusinessSupportAcademy from "./pages/BusinessSupportAcademy";
import Employability from "./pages/Employability";
import Entrepreneurship from "./pages/Entrepreneurship";
import Studentloan from "./pages/Studentloan";
import Trainingbond from "./pages/Trainingbond";
import Scholarships from "./pages/Scholarships";
import Error404 from "./pages/Error404";

// courseinfo pages
import Frontend from "./pages/Courseinfo.js/Frontend";
import Backend from "./pages/Courseinfo.js/Backend";
import Fullstack from "./pages/Courseinfo.js/Fullstack";
import Devops from "./pages/Courseinfo.js/Devops";
import ArchitectdesignInfo from "./pages/Courseinfo.js/Architectdesign";
import ArchitecttechInfo from "./pages/Courseinfo.js/Architecttech";
import Relationaldb from "./pages/Courseinfo.js/Relationaldb";
import Riskmgt from "./pages/Courseinfo.js/Riskmgt";
import Reverseengineering from "./pages/Courseinfo.js/Reverseengineering";
import Pentesting from "./pages/Courseinfo.js/Pentesting";
import Bigdata from "./pages/Courseinfo.js/Bigdata";
import Python from "./pages/Courseinfo.js/Python";
import IoT from "./pages/Courseinfo.js/IoT";
import Securityaudit from "./pages/Courseinfo.js/Securityaudit";
import Sales from "./pages/Courseinfo.js/Sales";
import Customerexperience from "./pages/Courseinfo.js/Customerexperience";
import Digitalmarketing from "./pages/Courseinfo.js/Digitalmarketing";
import Videoediting from "./pages/Courseinfo.js/Videoediting";
import Personaldevt from "./pages/Courseinfo.js/Personaldevt";
import Successfulteam from "./pages/Courseinfo.js/Successfulteam";
import Stillandmotion from "./pages/Courseinfo.js/Stillandmotion";
import Workshop from "./pages/Courseinfo.js/Workshop";
import Devopportunity from "./pages/Courseinfo.js/Devopportunity";
import Business from "./pages/Courseinfo.js/Business";
import Growth from "./pages/Courseinfo.js/Growth";
import Financing from "./pages/Courseinfo.js/Financing";
import Criticalthinking from "./pages/Courseinfo.js/Criticalthinking";
import ContentMgt from "./pages/Courseinfo.js/ContentMgt";
import DigitalAdminTools from "./pages/Courseinfo.js/DigitalAdminTools";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="techacademy" element={<TechAcademy />} />
        <Route
          path="businesssupportacademy"
          element={<BusinessSupportAcademy />}
        />
        <Route path="employability" element={<Employability />} />
        <Route path="entrepreneurship" element={<Entrepreneurship />} />
        <Route path="studentloan" element={<Studentloan />} />
        <Route path="scholarships" element={<Scholarships />} />
        <Route path="trainingbond" element={<Trainingbond />} />
        <Route path="*" element={<Error404 />} />

        {/* course info pages */}
        {/* techacademy */}
        <Route path="frontend" element={<Frontend />} />
        <Route path="backend" element={<Backend />} />
        <Route path="fullstack" element={<Fullstack />} />
        <Route path="devops" element={<Devops />} />
        <Route path="architectdesigninfo" element={<ArchitectdesignInfo />} />
        <Route path="architecttechnfo" element={<ArchitecttechInfo />} />
        <Route path="relationaldb" element={<Relationaldb />} />
        <Route path="riskmgt" element={<Riskmgt />} />
        <Route path="reverseengineering" element={<Reverseengineering />} />
        <Route path="pentesting" element={<Pentesting />} />
        <Route path="bigdata" element={<Bigdata />} />
        <Route path="python" element={<Python />} />
        <Route path="iot" element={<IoT />} />
        <Route path="securityaudit" element={<Securityaudit />} />

        <Route path="sales" element={<Sales />} />
        <Route path="contentmgt" element={<ContentMgt />} />
        <Route path="customerexperience" element={<Customerexperience />} />
        <Route path="digitalmarketing" element={<Digitalmarketing />} />
        <Route path="videoediting" element={<Videoediting />} />
        <Route path="personaldevt" element={<Personaldevt />} />
        <Route path="successfulteam" element={<Successfulteam />} />
        <Route path="workshop" element={<Workshop />} />
        <Route path="stillandmotion" element={<Stillandmotion />} />
        <Route path="criticalthinking" element={<Criticalthinking />} />
        <Route path="devopportunity" element={<Devopportunity />} />
        <Route path="business" element={<Business />} />
        <Route path="businessupport" element={<BusinessSupportAcademy />} />
        <Route path="growthstrategy" element={<Growth />} />
        <Route path="digitaladmintools" element={<DigitalAdminTools />} />
        <Route path="financing" element={<Financing />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
