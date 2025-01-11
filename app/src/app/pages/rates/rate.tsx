import React from "react";

export default function Rate({className, classRate}) {
return (
    <>
        <div className="rate">
            <h2>{className}</h2>
            <p>{classRate}</p>
        </div>
    </>
)
}