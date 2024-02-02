import React from "react";
import './Trips.css';
import day_trip from "../Trips/daytripbag.jpg";
import multi_trip from "../Trips/multitrip.jpg";
import private_trip from "../Trips/privatetrip.jpg";

export default function Trips(){
    return(
        <>
        <div className="trips">
            <div className="trips-icon">
                <div>
                    <img src={day_trip} alt="" />
                    <p>DAY-TRIPS</p>
                </div>
                <div>
                    <img src={multi_trip} alt="" />
                    <p>MULTI-DAY TRIPS</p>

                </div>
                <div>
                    <img src={private_trip} alt="" />
                    <p>PRIVATE TOURS</p>

                </div>
            </div>
            
        </div>
        </>
    )
}