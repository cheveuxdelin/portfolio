import React from 'react'
import logo from './logo.svg'

import certifications from "./data/certifications.json";
import education from "./data/education.json";
import personal_info from "./data/personal_info.json";
import projects from "./data/projects.json";
import technical_skills from "./data/technical_skills.json";
import work from "./data/work.json"

import shawn_sheep from "./assets/shawn_sheep.jpeg";

type projects = {
  name: string;
  tecnologies: string[];
  start_date: string;
  end_date: string;
  description: string[];
}[];

type work = {
  position: string;
  company_name: string;
  start_date: string;
  end_date: string;
  location: string;
  description: string[];
}[];

type education = {
  university: string;
  description: string;
  location: string;
  start_date: string;
  end_date: string;
}[];

type personal_info = {
  first_name: string;
  middle_name: string;
  father_lastname: string;
  mother_lastname: string;
  phone_code: string;
  phone: string;
  email: string;
  website: string;
  linkedin: string;
  github: string;
  spotify: string;
};

type certifications = {
  title: string;
  description: string;
  date: string;
  company: string;
}[];

type technical_skills = {
  type: string;
  items: string[];
};


function App() {

  return (
    <div style={{
      "display": "flex",
      "flexDirection": "column"
    }}>
      <header style={{
        "height": "100px",
        "display": "flex",
      }}>
        <a href="#">ABOUT</a>
        <a href="#">PROJECTS</a>
        <a href="#">GIF</a>
      </header>
      <main style={{
        "height": "calc(100vh - 200px)",
        "display": "flex",
      }}>
        <React.Fragment>
          <div style={{
            "color": "white",
            "width": "fit-content",
            "margin": "auto",
            "display": "flex",
            "alignItems": "center",
          }}>
            <img src={shawn_sheep} width="300px" height="300px" style={{ "objectFit": "cover", "marginRight": "20px", "borderRadius": "50%" }} />
            <div>
              <h1>{personal_info.first_name} {personal_info.father_lastname}</h1>
              <h2><strong>{work[0].position}</strong> @ {work[0].company_name}</h2>
              <h3>Engineering my life and being happy at the same time 🐑</h3>
            </div>
          </div>
        </React.Fragment>
      </main>
      <footer style={{
        "height": "100px",
        "display": "flex",
      }}>
        <a target="blank" href={personal_info.spotify}>Spotify</a>
        <a target="blank" href={personal_info.github}>Github</a>
        <a target="blank" href={personal_info.linkedin}>Linkedin</a>
        <a target="blank" href={`mailto:${personal_info.email}`}>Email</a>
      </footer>
    </div >
  )
}

export default App
