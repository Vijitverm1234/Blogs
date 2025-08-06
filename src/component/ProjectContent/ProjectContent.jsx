import React from "react";
import "./ProjectContent.css";
const ProjectContent = ({ projects, currProject }) => {
  return (
    <div className="container">
      <div className="main-pic">
        <img src={projects[currProject].project_main_photo} alt="" />
      </div>
      <hr />
      <div className="description">
        <div className="heading">Objective</div>
        {projects[currProject].project_des}
      </div>
      <hr />
      <div className="heading">Tech Stack</div>
      <div className="head-info">
        {projects[currProject].project_tech_stack.map((item, ind) => (
          <div key={ind}> {item}</div>
        ))}
      </div>

      <hr />
      <div className='list'>
        <div className="heading">Features</div>
            {projects[currProject].project_list.map((item,ind)=>(
                <li key={ind}>{item}</li>
            ))}
         </div>
      <hr />
      <div className='conclusion'>
            <div className='heading'>Challenges Faced</div>
            {projects[currProject].project_challenges.map((item,ind)=>(
                <li className="ind">{item}</li>
            ))}
         </div>
      <hr />
       <div>
        <div className="heading">Explore it More</div>
        <div className="link">
            <a href={projects[currProject].project_source} target="_blank"><div>⚫GitHub </div></a>
            <a href={projects[currProject].project_deployment} target="_blank"><div> 🔴Deployement</div></a>
      

        </div>
       </div>
      <hr />
      <div className="screenshot">
        <div className="heading">ScreenShot</div>
        <div className="screenshot-grid">
          {projects[currProject].project_screenshot.map((item, ind) => (
            <img
              src={item}
              key={ind}
              alt={`${projects[currProject].project_title} screenshot ${
                ind + 1
              }`}
              className="screenshot-img"
            />
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProjectContent;
