import React, { useState } from "react";
import "./Project.css";
import ProjectContent from "../ProjectContent/ProjectContent";
const Project = () => {
  const [currProject, setCurrProject] = useState(1);
  const projects = [
    {
      project_title: "Text To Image Generator",
      project_id: 1,
      project_des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam impedit! Illo architecto deleniti quam ratione dicta amet facere sed. Eaque placeat asperiores eveniet quam in dolorum eos laborum architecto!",
      project_tech_stack: [
        "MongoDB",
        "Express.js",
        "Node.js",
        "Crip Drop AI",
        "GenAI",
        "React",
      ],
      project_main_photo:
        "https://s3.amazonaws.com/thumbnails.venngage.com/template/5e0434ce-c0a9-4c21-a85d-2d8afb9f0c5c.png",
      project_screenshot: [
        "https://snacknation.com/wp-content/uploads/2024/07/Corporate-Tech-Gifts-Hero-Image-e1720631857902.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7TFLzfW8FFQMr8Z2VPBLVZAJYbp97uSxahY52ymFR42IQmFYZR6dvH5QX5jZGuyOm0Y&usqp=CAU",
        "https://thumbs.dreamstime.com/b/electronic-gadgets-icons-technology-electronics-multimedia-devices-everyday-objects-control-computer-connection-digital-89494813.jpg",
      ],
      project_list: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam impedit! Illo architecto deleniti quam ratione dicta amet facere sed. Eaque placeat asperiores eveniet quam in dolorum eos laborum architecto!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam impedit! Illo architecto deleniti quam ratione dicta amet facere sed. Eaque placeat asperiores eveniet quam in dolorum eos laborum architecto!",
      ],
      project_challenges: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam impedit! Illo architecto deleniti quam ratione dicta amet facere sed. Eaque placeat asperiores eveniet quam in dolorum eos laborum architecto!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam impedit! Illo architecto deleniti quam ratione dicta amet facere sed. Eaque placeat asperiores eveniet quam in dolorum eos laborum architecto!",
      ],
      project_deployment: " ",
      project_source: "",
    },
    {
      project_title: "Text To Image Generator",
      project_id: 2,
      project_des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam impedit! Illo architecto deleniti quam ratione dicta amet facere sed. Eaque placeat asperiores eveniet quam in dolorum eos laborum architecto!",
      project_tech_stack: [
        "MongoDB",
        "Express.js",
        "Node.js",
        "Crip Drop AI",
        "GenAI",
        "React",
      ],
      project_main_photo:
        "https://s3.amazonaws.com/thumbnails.venngage.com/template/5e0434ce-c0a9-4c21-a85d-2d8afb9f0c5c.png",
      project_screenshot: [
        "https://snacknation.com/wp-content/uploads/2024/07/Corporate-Tech-Gifts-Hero-Image-e1720631857902.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7TFLzfW8FFQMr8Z2VPBLVZAJYbp97uSxahY52ymFR42IQmFYZR6dvH5QX5jZGuyOm0Y&usqp=CAU",
        "https://thumbs.dreamstime.com/b/electronic-gadgets-icons-technology-electronics-multimedia-devices-everyday-objects-control-computer-connection-digital-89494813.jpg",
      ],
      project_list: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam impedit! Illo architecto deleniti quam ratione dicta amet facere sed. Eaque placeat asperiores eveniet quam in dolorum eos laborum architecto!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam impedit! Illo architecto deleniti quam ratione dicta amet facere sed. Eaque placeat asperiores eveniet quam in dolorum eos laborum architecto!",
      ],
      project_challenges: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam impedit! Illo architecto deleniti quam ratione dicta amet facere sed. Eaque placeat asperiores eveniet quam in dolorum eos laborum architecto!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam impedit! Illo architecto deleniti quam ratione dicta amet facere sed. Eaque placeat asperiores eveniet quam in dolorum eos laborum architecto!",
      ],
      project_deployment: " ",
      project_source: "",
    },
    {
      project_title: "Text To Image Generator",
      project_id: 3,
      project_des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam impedit! Illo architecto deleniti quam ratione dicta amet facere sed. Eaque placeat asperiores eveniet quam in dolorum eos laborum architecto!",
      project_tech_stack: [
        "MongoDB",
        "Express.js",
        "Node.js",
        "Crip Drop AI",
        "GenAI",
        "React",
      ],
      project_main_photo:
        "https://s3.amazonaws.com/thumbnails.venngage.com/template/5e0434ce-c0a9-4c21-a85d-2d8afb9f0c5c.png",
      project_screenshot: [
        "https://snacknation.com/wp-content/uploads/2024/07/Corporate-Tech-Gifts-Hero-Image-e1720631857902.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7TFLzfW8FFQMr8Z2VPBLVZAJYbp97uSxahY52ymFR42IQmFYZR6dvH5QX5jZGuyOm0Y&usqp=CAU",
        "https://thumbs.dreamstime.com/b/electronic-gadgets-icons-technology-electronics-multimedia-devices-everyday-objects-control-computer-connection-digital-89494813.jpg",
      ],
      project_list: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam impedit! Illo architecto deleniti quam ratione dicta amet facere sed. Eaque placeat asperiores eveniet quam in dolorum eos laborum architecto!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam impedit! Illo architecto deleniti quam ratione dicta amet facere sed. Eaque placeat asperiores eveniet quam in dolorum eos laborum architecto!",
      ],
      project_challenges: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam impedit! Illo architecto deleniti quam ratione dicta amet facere sed. Eaque placeat asperiores eveniet quam in dolorum eos laborum architecto!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam impedit! Illo architecto deleniti quam ratione dicta amet facere sed. Eaque placeat asperiores eveniet quam in dolorum eos laborum architecto!",
      ],
      project_deployment: "hello",
      project_source: "hello",
    },
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
