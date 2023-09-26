import React from "react";
import "./about.css";

const About = () => {
    return (
        <div>
        <h1>About me</h1>
        <div className = "about-card">
        <img src="/images/uteBjornCropped.jpg" alt="Picture of me" />
        <div className = "about-card-text">
        <p>Hi, I'm Bjørn!  I'm a versatile individual with a background that encompasses both the creative and technical worlds. I'm currently pursuing a Bachelor's degree in Datatechnology at the University of Bergen, focusing on topics like programming, system development, and problem-solving. Although I started my academic journey in the world of Music Production, I've found my groove in the tech field.</p>
        <p>I love diving into code just as much as I love exploring the countryside on my road bike, traversing the backcountry while skiing or getting lost in a video game. </p>
        <p>I made this website to make it easy for you to take a look at some of the things I've been working on. Feel free to check them out and get in touch if you have any questions!</p>
        </div>
        </div>
        </div>
    );
}
export default About