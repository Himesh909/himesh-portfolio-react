import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Section from "../Components/Section";
import SectionAchievement from "../Components/SectionAchievement";
import SectionEducation from "../Components/SectionEducation";
import Technology from "../Components/Technology";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Technology />
      <Section
        section={""}
        heading={"Experience"}
        l1={"Team Leader for 1 Year in College."}
        l2={"Smart India Hackathon 2023 Participant."}
      />
      <Section
        section={"section"}
        heading={"Goal"}
        l1={"My Goal is to become International Full Stack MERN Developer."}
        l2={"That Includes MongoDB , Express.JS, React.js and Node.js."}
      />
      <Section
        section={""}
        heading={"Hobbies"}
        l1={"Programming"}
        l2={"Problem Solving"}
      />
      <SectionAchievement
        heading={"Achievements"}
        l1={
          "Certificates of Tata Consultancy Service and Curious Junior are available at Achievements Page."
        }
      />
      <SectionEducation
        heading={"Education"}
        l1={"I completed my 10th from H.A Pandya, Ahmedabad, Gujarat"}
        l2={
          "Currently Studying Diploma in Artificial Intelligence and Machine Learning at L.J. University (2022 - 2025), Ahmedabad, Gujarat."
        }
        l3={"MarkSheets are available at Education Page."}
      />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
