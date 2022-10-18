import React from 'react';
import "./Credits.css";

function Credits(props) {
    return (
        <div className="credits">
            <div className="window">
                <div className="title-bar">
                    <div className="title-bar-text" >Troubleshooting</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                    <div className="window" id={"references"}></div>
                </div>
            </div>
        </div>
    );
}

export default Credits;