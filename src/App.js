import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import TeamDetails from "./pages/Team/team-details";
import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";
import Allprojects from "./pages/Projects/projects";
import Course_details from "./pages/Courses/course-details";
import Companys from "./components/companys";
import Error404 from "./pages/error404-page";
import All_features from "./pages/Features/our-features";

import { HelmetProvider } from "react-helmet-async";
import Register from "./pages/Auth/register";
import LoginPage from "./pages/Auth/login";
import CreateCourseForm from "./pages/Courses/course-insert";
import AllCourses from "./pages/Courses/courses";
import ManageCourses from "./pages/Courses/Manage-courses";
import ManageFeatures from "./pages/Features/manage-features";
import ManageTeam from "./pages/Team/manage-team";
import ManageProject from "./pages/Projects/manage-project";
import RegisterCourse from "./pages/Courses/Course-register";
import Contact_us from "./pages/contact/contact-us";
import About_us from "./pages/contact/About-us";
import Manage_users from "./pages/Users/manage-user";
import Manage_contact from "./pages/contact/manage-contact";

const App = () => {
  return (
    <HelmetProvider>
    <BrowserRouter>
  <Navbar/>

<Routes>
<Route path="/" element={<Home />} />
<Route path="/*" element={<Error404 />} />
<Route path="/manage-team" element={<ManageTeam />} />
<Route path="/team-details/:id" element={<TeamDetails />} />

{/* courses */}
<Route path="/Courses" element={<AllCourses />} />
<Route path="/Course-detail/:courseId" element={<Course_details />} />
<Route path="/manage-courses" element={<ManageCourses />} />
<Route path="/manage-register-course" element={<RegisterCourse />} />

{/* projects */}
<Route path="/Our-Projects" element={<Allprojects />} />
<Route path="/manage-project" element={<ManageProject />} />

{/* features */}
<Route path="/Our-features" element={<All_features />} />
<Route path="/manage-features" element={<ManageFeatures />} />

{/* contact */}
<Route path="/About-us" element={<About_us />} />
<Route path="/Contact-us" element={<Contact_us />} />
<Route path="/manage-contact" element={<Manage_contact />} />

{/* auth */}
<Route path="/register" element={<Register />} />
<Route path="/login" element={<LoginPage />} />
<Route path="/users" element={<Manage_users />} />


</Routes>

</BrowserRouter>

    </HelmetProvider>

  );
};

export default App;
