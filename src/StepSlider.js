import {Steps} from "./Steps";
import React, {useState} from "react";


const StepsSlider = () => {
    const [current,setCurrent] = useState(0)
    const length = Steps.length



    return(
        <section className="steps_slider">
            <button className="prev-btn">
                <i className="fas fa-arrow-circle-left"></i>
            </button>
            <button id="next-btn">
                <i className="fas fa-arrow-circle-right"></i>
            </button>
            {Steps.map((step, index)=> {
                return(
                    <div>
                        <h2>{step.title}</h2>
                        <p>{step.text}</p>
                        <img src={step.image} alt="step image" className="step_images"/>
                    </div>
                );
            })}
        </section>
    )
}
