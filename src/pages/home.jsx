import React, { useEffect, useState } from "react";
import Hero from "../components/hero";
import Navbar from "../components/layouts/navbar";
import About_us from "../components/About-us";
import Our_team from "../components/Our-team";
import Our_features from "../components/our-features";
import Projects from "../components/projects";
import Footer from "../components/layouts/footer";
import Courses from "../components/courses";
import Companys from "../components/companys";
import Loader from "./Loader";
import Project_package from "../components/project-packages";
import PricingSection from "../components/project-pricing";
import Course_package from "../components/Course_package";

const Home = () => {
  const [courses, setCourses] = useState([]); // Initialize as empty array
  const [teamMembers, setTeamMembers] = useState([]); // Initialize as empty array
  const [Features, setFeatures] = useState([]); // Initialize as empty array
  const [projects, setProjects] = useState([]); // Initialize as empty array

  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchCourses = async () => {
    try {
      const response = await fetch(`${apiUrl}/course`);
      if (!response.ok) {
        throw new Error("Failed to fetch courses.");
      }
      const data = await response.json();
      setCourses(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchTeamMembers = async () => {
    try {
      const response = await fetch(`${apiUrl}/ourteam`);
      if (!response.ok) {
        throw new Error("Failed to fetch team members.");
      }
      const data = await response.json();
      setTeamMembers(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchFeatures = async () => {
    try {
      const response = await fetch(`${apiUrl}/feature`);
      if (!response.ok) {
        throw new Error("Failed to fetch feature.");
      }
      const data = await response.json();
      setFeatures(data.data);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchProjects = async () => {
    try {
      const response = await fetch(`${apiUrl}/project?limit=10`);
      if (!response.ok) {
        throw new Error("Failed to fetch feature.");
      }
      const data = await response.json();
      setProjects(data.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([fetchCourses(), fetchTeamMembers(),fetchFeatures(),fetchProjects()]);
      setLoading(false); // Set loading to false once all data is fetched
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col bg-[#1e1e1e] justify-between">
      
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Hero />
          <About_us />
          <Our_team data={teamMembers} /> 
          <Our_features  data={Features} />

          <Projects data={projects} />
          <PricingSection/>
          <Project_package/>

          <Courses  data={courses} />
<Course_package/>
          <Companys />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
