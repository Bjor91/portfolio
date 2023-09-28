import React from "react";
import "./projects.css";
import ClickableGif from "../../4. Utility component/clickableGif";

const Projects = () => {



    return (
        <div>
            <h1>Projects</h1>

            <div className="projects">


                <div className="project1">
                    
                    <ClickableGif gifSrc="/gifs/1.gif" thumbnailSrc="/gifs/1.png" />
                    <p> My contribution to a coding-challenge about saving. 
                        This React application provides an interface to monitor and manage financial transactions and account details with dynamic time filtering and category management. 
                    </p>  
                </div>

                <div className="project2">
                    <p> The backend of the SaveIt, set up using Java with the Spring Boot framework. Exposes a set of APIs that the web-app can call upon to retrieve data</p>
                    
                    <ClickableGif gifSrc="/gifs/2.gif" thumbnailSrc="/gifs/2.png" />

                </div>

                <div className="project3">
                    <ClickableGif gifSrc="/gifs/3.gif" thumbnailSrc="/gifs/3.png" />
                    <p> Group project for a system-development course. Kill monsters, gain experience and use experience to upgrade ability. Fun game where your goal is to survive as long as possible, reaching the highest level.</p>
                </div>

                {/* 
                <div className="project4">
                    <p> a gif showcasing project 4 coupled with a description</p>
                    <ClickableGif gifSrc="/gifs/4.gif" thumbnailSrc="/gifs/3.png" />
 
                </div>
                <div className="project5">

                    <ClickableGif gifSrc="/gifs/5.gif" thumbnailSrc="/gifs/3.png" />
                    <p> a gif showcasing project 5 coupled with a description</p>
                </div>*/}
            </div>
        </div>
    );
}
export default Projects
