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
                    <p> My contribution to a coding-challenge about saving. A web application blahblah </p>
                </div>

                <div className="project2">
                    <p> and here <>LINK!!</>is the backend blahblah spring boot </p>
                    
                    <ClickableGif gifSrc="/gifs/2.gif" thumbnailSrc="/gifs/2.png" />

                </div>

                <div className="project3">
                    <ClickableGif gifSrc="/gifs/3.gif" thumbnailSrc="/gifs/3.png" />
                    <p> Group project for a system-development course. Fun little game where you blahblah</p>
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
