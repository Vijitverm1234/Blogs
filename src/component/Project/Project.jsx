import React, { useState } from "react";
import "./Project.css";
import ProjectContent from "../ProjectContent/ProjectContent";
const Project = () => {
  const [currProject, setCurrProject] = useState(1);
  const projects = [
   {
    "project_title": "Text To Image Generator",
    "project_id": 1,
    "project_des": "An AI-driven web app that generates images from text prompts using a diffusion model API. Built with MERN stack, it includes JWT authentication and a Stripe payment gateway for premium features.",
    "project_tech_stack": [
      "MongoDB",
      "Express.js",
      "Node.js",
      "Diffusion Model API",
      "JWT",
     
      "React"
    ],
    "project_main_photo": "Banner4.png",
    "project_screenshot": [
      "https://snacknation.com/wp-content/uploads/2024/07/Corporate-Tech-Gifts-Hero-Image-e1720631857902.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7TFLzfW8FFQMr8Z2VPBLVZAJYbp97uSxahY52ymFR42IQmFYZR6dvH5QX5jZGuyOm0Y&usqp=CAU",
      "https://thumbs.dreamstime.com/b/electronic-gadgets-icons-technology-electronics-multimedia-devices-everyday-objects-control-computer-connection-digital-89494813.jpg"
    ],
    "project_list": [
      "Developed a MERN-based application with a diffusion model API for text-to-image generation.",
      "Integrated JWT for secure authentication and Stripe for processing premium subscription payments."
    ],
    "project_challenges": [
      "Optimized diffusion model API calls for fast, high-quality image generation under resource constraints.",
      "Ensured secure JWT authentication and payment processing for a seamless user experience."
    ],
    "project_deployment": "Hosted on Vercel with MongoDB Atlas.",
    "project_source": "https://github.com/username/text-to-image-generator"
  },
  {
    "project_title": "Interview Scheduler with AI Feedback",
    "project_id": 2,
    "project_des": "An AI-driven full-stack app for scheduling interviews, generating AI-based questions, and providing voice/text answers with instant feedback reports. Built with Clerk authentication, Node.js, Express.js, Shadcn, Neon, and Drizzle ORM.",
    "project_tech_stack": [
      "Node.js",
      "Express.js",
      "Clerk",
      "Shadcn",
      "Neon",
      "Drizzle ORM",
      "Next.js"
    ],
    "project_main_photo": "Banner5.png",
    "project_screenshot": [
      "https://snacknation.com/wp-content/uploads/2024/07/Corporate-Tech-Gifts-Hero-Image-e1720631857902.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7TFLzfW8FFQMr8Z2VPBLVZAJYbp97uSxahY52ymFR42IQmFYZR6dvH5QX5jZGuyOm0Y&usqp=CAU",
      "https://thumbs.dreamstime.com/b/electronic-gadgets-icons-technology-electronics-multimedia-devices-everyday-objects-control-computer-connection-digital-89494813.jpg"
    ],
    "project_list": [
      "Developed a full-stack app to schedule interviews and generate AI-based questions for users.",
      "Enabled voice/text answers with AI-generated feedback reports delivered in under a minute."
    ],
    "project_challenges": [
      "Optimized AI processing to provide instant feedback within a minute.",
      "Integrated Clerk for secure authentication and Neon with Drizzle ORM for efficient data management."
    ],
    "project_deployment": "Deployed on Heroku with Neon database.",
    "project_source": "https://github.com/username/interview-scheduler-ai"
  },
    
  {
    "project_title": "Plant Disease Detection",
    "project_id": 3,
    "project_des": "An AI-driven application for detecting plant diseases using machine learning, generating detailed reports via GenAPI. Built with Flask for a lightweight backend, it provides accurate disease identification and analysis.",
    "project_tech_stack": [
      "Flask",
      "Machine Learning",
      "GenAPI",
      "Python"
    ],
    "project_main_photo": "Banner6.png",
    "project_screenshot": [
      "https://snacknation.com/wp-content/uploads/2024/07/Corporate-Tech-Gifts-Hero-Image-e1720631857902.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7TFLzfW8FFQMr8Z2VPBLVZAJYbp97uSxahY52ymFR42IQmFYZR6dvH5QX5jZGuyOm0Y&usqp=CAU",
      "https://thumbs.dreamstime.com/b/electronic-gadgets-icons-technology-electronics-multimedia-devices-everyday-objects-control-computer-connection-digital-89494813.jpg"
    ],
    "project_list": [
      "Developed a Flask-based app to detect plant diseases using machine learning models.",
      "Integrated GenAPI to generate comprehensive AI-driven disease reports."
    ],
    "project_challenges": [
      "Trained ML models to accurately identify various plant diseases from image inputs.",
      "Optimized GenAPI for fast and reliable report generation."
    ],
    "project_deployment": "Deployed on Heroku.",
    "project_source": "https://github.com/username/plant-disease-detection"
  }

  ];
  return (
    <>
      <div className="con">
        {projects.map((project, ind) => (
          <div
            key={ind}
            style={{
              backgroundColor: ind === currProject ? "#feab1a" : "transparent",
            }}
            className="cir"
            onClick={() => setCurrProject(ind)}
          >
            {project.project_id}
          </div>
        ))}
      </div>
      <ProjectContent
        projects={projects}
        currProject={currProject}
      ></ProjectContent>
    </>
  );
};

export default Project;
