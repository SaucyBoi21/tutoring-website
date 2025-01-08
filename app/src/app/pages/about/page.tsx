import React from "react";
import Subject from "./subject";

export default function About() {
    return (
        <>
            <div className="name">
                <h1>Saahas' Scholars</h1>
            </div>
            <div className="introduction">
                <h2>Hello! I'm Saahas, your future instructor.</h2>
            </div>
            <div className="description">
                <p>I'm a Computer Engineering student at Georgia Tech with over 5 years of tutoring experience.</p>
            </div>
            <div className="saahas_img">
                <img src="" alt="" />
            </div>
            <div className="subjects">
                <h3>Subjects Offered: </h3>
                <Subject subjectName="K-8 Math" />
                <Subject subjectName="Algebra I & II" />
                <Subject subjectName="Geometry A/B" />
                <Subject subjectName="Precalculus" />
                <Subject subjectName="Calculus AB" />
                <Subject subjectName="Calculus BC" />
                
            </div>
        </>
    )
}