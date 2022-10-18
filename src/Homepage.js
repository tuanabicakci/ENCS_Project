import React from 'react';
import "./Homepage.css";
import {Link} from "react-router-dom";
import Image from "./computer.png";
import {useState} from "react";

function Homepage(props) {

    const [showH,setIsShownH]=useState(true);
    const [showE,setIsShownE]=useState(false);

    return (
        <div className="homepage">
            {showH &&
             <div className="start">
             <img id="computer_start" src={Image} alt=""/>
             <h1 id="title">HOW TO BUILD A COMPUTER</h1>
            <p className="introduction">This website aims to inform users how to properly assemble a desktop PC. It features instructions on how
                to install each part properly as well as how to do it safely. It
                assumes the user has already chosen compatible parts and is aware of their limitations, sizes, etc.
                Users are expected to have general knowledge of computer parts due to this assumption; the guide will
                use semi-advanced terminology to express instructions.  Building
                a computer can seem intimidating at first, but once the process is understood, anyone can do it!</p>
            <h2 className="start_prompt">Click to start!</h2>
                <button className="start_button" onClick={()=>{setIsShownH(false);setIsShownE(true)}}>START</button>
             </div>
            }
            { showE &&
                <div className="items">
                    <div className="window">
                        <div className="title-bar">
                            <div className="title-bar-text">Checklist</div>
                            <div className="title-bar-controls">
                                <button aria-label="Minimize"></button>
                                <button aria-label="Maximize"></button>
                                <button aria-label="Close"></button>
                            </div>
                        </div>
                        <p className="item_intro">
                            <strong>To complete this guide, the following is required:</strong>
                            <br/>
                            Note: These are the minimum requirements and may result in some issues when building as
                            different parts may have varying requirements or screwdriver compatibility.
                        </p>
                        <div className="window-body" id="caution_window_body">

                            <input type="checkbox" id="1"/>
                            <label htmlFor="1"><strong>A precision screwdriver kit (preferably 4mm)</strong>

                                <ul>
                                    <li>Philips 000 – 2</li>
                                    <li>Flathead 1 – 4mm</li>
                                    <li>It is recommended to have extra screwdriver heads too if the common case is not
                                        covered (Philips or Flathead).</li>
                                </ul>
                            </label>
                            <input type="checkbox" id="4"/>
                            <label htmlFor="4"><strong>Full array of computer components (already checked for compatibility!):</strong>
                                <ul>
                                    <li>PC Case</li>
                                    <li>Central Processing Unit (CPU) (AMD or NVIDIA)</li>
                                    <li>Compatible CPU Cooler</li>
                                    <li>AMD or NVIDIA Graphics Processing Unit (GPU)</li>
                                    <li>Motherboard compatible with the chosen CPU type</li>
                                    <li>A minimum of 2 Random Access Memory (RAM) sticks (some motherboards
                                    may not boot with a single stick)</li>
                                    <li>Hard Drive (HDD), Solid State Drive (SSD), or M.2 (1 of any will do)</li>
                                    <li>Case Fans</li>
                                    <li>Power Supply / Power Supply Unit (PSU)</li>
                                    <li>USB clear of all data (at least 8GB)</li>
                                    <li>High Definition Multimedia Interface (HDMI) cable or other video cables</li>
                                    <li>Thermal Paste</li>
                                    <li>Computer Monitor or TV</li>
                                </ul>
                            </label>
                            <input type="checkbox" id="2"/>
                            <label htmlFor="2"><strong>An open workspace with a flat surface</strong>
                                <ul>
                                    <li>This will be used to place parts down and organize the assembly.</li>
                                </ul>
                            </label>
                            <label htmlFor="">
                            </label>
                            <input type="checkbox" id="3"/>
                            <label htmlFor="3"><strong>Optional Quality of Life Parts:</strong>
                                <ul>
                                    <li>Scissors</li>
                                    <li>Zip ties or Cable Clips</li>
                                    <li>Bin for garbage from unwrapped parts</li>
                                </ul>
                            </label>


                            <label htmlFor=""></label>

                            </div>
                        <div className="items-ok">
                            <p><strong>Click to continue!</strong></p>
                            <Link to="/instructions">
                                <button >OK</button>
                            </Link>
                        </div>
                    </div>
                </div>

            }
        </div>

    );
}

export default Homepage;