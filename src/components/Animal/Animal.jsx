import React from "react";
import './Animal.css';
export default function Animal(){
    return(
        <>
        <div className="animal-bg">
            <div className="animal-part">
                <div className="animal-text">
                    <h2>Welcome to the Deep</h2>
                    <h2 className="h2">Southwest</h2>
                    <h6>Discover with EcoTour Barahona, your spacialist in Ecotourism a new</h6>
                    <h6>Face of the Dominican Repubilc, more human, more authentic!</h6>
                    <p>We have artistically designed unique excursions for you acoumpanied by professional and passionte local guides who will show you the best of this <br/>part of the country.</p>
                    <div><button>KNOW MORE</button></div>
                </div>
                <div className="animal-img"><img src="https://i.ytimg.com/vi/eX75_CvnIsM/maxresdefault.jpg" alt="" /></div>
            </div>
        </div>
        </>
    )
}