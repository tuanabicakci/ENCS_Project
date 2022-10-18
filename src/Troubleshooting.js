import React from 'react';
import "./Troubleshooting.css";
import Errors from "./Errors";
import {useState} from "react";

function Troubleshooting() {

    const [selected, setSelected] = useState(null)

    const toggle = (index) => {
        if(selected === index){
            return setSelected(null);
        }

        setSelected(index);
    }
    return(
        <div className="troubleshooting">
            <div className="tb-wrapper">
                <div className="window" id="window-tb">
                    <div className="title-bar">
                        <div className="title-bar-text" >Troubleshooting</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize"></button>
                            <button aria-label="Maximize"></button>
                            <button aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="window-body" id="window-body-tb">
                        <div className="window" id="window-errors">
                        <p>Click to expand!</p>
                        <div className="accordion">
                            {Errors.map((error, index)=>{
                                return(
                                    <div className="error">
                                        <div onClick={()=> toggle(index)} className="title-bar" id="title_bar_tb">
                                            <div  className="title-bar-text" id="title_bar_text_tb">{error.title}</div>
                                            <div className="title-bar-controls" id="title_bar_controls_tb">
                                                <button  aria-label={selected=== index ?"Close":"Help"}></button>
                                            </div>
                                        </div>

                                        <div className={selected=== index ? 'content show':'content'}>
                                            <div className="window" id="window_troubleshooting">
                                                <div className="window-body"id="window_body_troubleshooting">
                                                    {error.text}
                                                </div></div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )

}

export default Troubleshooting;