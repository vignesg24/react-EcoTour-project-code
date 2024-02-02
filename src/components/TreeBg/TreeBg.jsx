import React from "react";
import './TreeBg.css';
export default function TreeBg(){
    return(
        <>
        <div className="treeBg">
            <h2>Why book with EcoTour Barahona?</h2>
            <div className="treeBg-icon">
                <div>
                    <h1><i class="fa-solid fa-person-swimming"></i></h1>
                    <p>Our day trips not only allow you to visit the Southwest, but also to experience it,</p>
                </div>
                <div>
                    <h1><i class="fa-regular fa-user"></i></h1>
                    <p>They are guided by professional and passionate Dominicans and show you the best and unexpected sides of the Dominican Repubilc.</p>

                </div>
                <div>
                    <h1><i class="fa-solid fa-medal"></i></h1>
                    <p>Benefit form small group sizes and guaranteed weekly departures.</p>
                </div>
            </div>
        </div>
        </>
    )
}