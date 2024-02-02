import React from "react";
import './Background.css';
import video from '../Background/bg-video.mp4';
 export default function Background(){
    return(
        <>
        <div className="background">
        <div className="background-video">
            <video src={video} autoPlay loop muted></video>
        </div>
            <div className="background-title">
                <h4>DISCOVER A HIDDEN PARADISE</h4>
                <h2>Deep South west,</h2>
                <h2>Dominican Republic</h2>
                <button>BOOK NOW</button>
            </div>
        </div>
        </>
    )
 }