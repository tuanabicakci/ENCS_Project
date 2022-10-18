import React from 'react';
import "./Instructions.css";
import Steps from "./Steps";
import {useState} from "react";

export const StepsSlider = () => {
    const [current,setCurrent] = useState(0);
    const length = Steps.length

    const nextSlide = () =>{
        setCurrent(current === length -1 ? 0: current+1);
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length-1 : current - 1);
    }
    console.log(current);

    if(!Array.isArray(Steps) || Steps.length <= 0){
        return null;
    }

    return(
        <div className="instructions">
            <i className="fas fa-arrow-circle-left" id="prev-btn"onClick={prevSlide}/>
            <i className="fas fa-arrow-circle-right" id="next-btn" onClick={nextSlide}/>
            <div className="window" id="steps-container">
                <div className="title-bar">
                    <div className="title-bar-text">Instructions</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="tab-wrapper">
                {Steps.map((step, index)=> {
                    return(
                        <section role={"tablist"}className="tab_container" key={index}>
                            <button className={index===current?'tabs-active':'tabs'} role="tab" aria-controls={step.tab} onClick={()=> setCurrent(index)} >{step.tab}</button>
                        </section>
                    );
                })}
                </div>
                <div className="window" id="steps">
                    {Steps.map((step, index)=> {
                        return(
                            <div className={index===current? 'slide-active':'slides'} key={index} id={step.tab}>

                                {(index === current)&& (
                                    <>
                                        <h2 className="step_title">{step.title}</h2>
                                        <p className="step_text">
                                            {step.text}
                                        </p>

                                    </>
                                )}
                            </div>

                        );
                    })}
                </div>
            </div>

        </div>
    )


}



function Instructions() {

    return (
        <StepsSlider slides={Steps}/>
    );
}

export default Instructions;