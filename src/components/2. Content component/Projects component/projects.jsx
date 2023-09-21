import React from "react";
import "./projects.css";


const Projects = () => {
    const [isPlaying1, setIsPlaying1] = useState(false);
    const [isPlaying2, setIsPlaying2] = useState(false);
    // ... add more for each project
  
    const toggleGif1 = () => {
      setIsPlaying1(!isPlaying1);
    };
  
    const toggleGif2 = () => {
      setIsPlaying2(!isPlaying2);
    };
    return (
        <div>
        <h1>Projects</h1>
        
        <div className = "projects">


        <div className = "project1">
        <img src ="/gifs/1.gif" alt="project 1 gif"/>
        <p> a gif showcasing project 1 coupled with a description a gif showcasing project 1 coupled with a description </p>
        </div>
      
        <div className = "project2">
        <img src ="/gifs/2.gif" alt="project 2 gif"/>
        <p> a gif showcasing project 2 coupled with a description</p>
        </div>
        <div className = "project3">
        
        <img src ="/gifs/3.gif" alt="project 3 gif"/>
        <p> a gif showcasing project 3 coupled with a description</p>
        </div>
        <div className = "project4">
        
        <img src ="/gifs/4.gif" alt="project 4 gif"/>
        <p> a gif showcasing project 4 coupled with a description</p>
        </div>
        <div className = "project5">
        
        <img src ="/gifs/5.gif" alt="project 5 gif"/>
        <p> a gif showcasing project 5 coupled with a description</p>
        </div>
        </div>
        </div>
    );
}
export default Projects
