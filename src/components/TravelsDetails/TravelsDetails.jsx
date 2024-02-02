import React, { useEffect, useState } from "react";
import './TravelsDetails.css';
import all_categories from '../TravelsDetails/allcategories.png';
import day_trips from '../TravelsDetails/day_trips.jpg';
import multi_day_trip from '../TravelsDetails/multi_day_trip.jpg';
import private_tour from '../TravelsDetails/private_tour.jpg';
import axios from "axios";
 export default function TravelsDetails(){
        const [dayTrip,setDaytrip]=useState([]);


        useEffect(()=>{
            axios.get("https://ecotour-project.vercel.app/data/readData")
            .then(res =>{
                let data = res.data.data[0].daytrip;
                let temp = [];
                for(let i=0;i<data.length;i++){
                    temp.push(data[i])
                }
                setDaytrip(temp)
            })
           
        },[]);


        

    return(
        <>
        <div className="travelsdetails-full">
            <div className="travelsdetails-icon">
                <div><img src={all_categories} alt="" /></div>
                <div><img src={day_trips} alt="" /></div>
                <div><img src={multi_day_trip} alt="" /></div>
                <div><img src={private_tour} alt="" /></div>
            </div>

            {
                dayTrip.map((v,i)=>{
                    return(
                        <div className="travelsdetails-port" key={i}>
                        <div className="travelport-left">
                            <div className="travelport-image"><img src={v.url} alt="" /></div>
                            <div className="travelport-text">
                                <div className="travelport-text-map">
                                    <div><span>ROUTE:</span> Barahona - Paraiso</div>
                                    <div><i class="fa-solid fa-map"></i> Map</div>
                                </div>
                                <p><i class="fa-regular fa-clock"></i> Horseback riding / Duration: 3-4 hours</p><hr />
                                <p><i class="fa-solid fa-location-dot"></i> Departing from: Barahona</p><hr />
                                <p><i class="fa-solid fa-camera"></i> Panoramic view over the Caribbean Sea</p><hr />
                                <p><i class="fa-solid fa-water"></i> Ride through a river</p><hr />
                                <p><i class="fa-solid fa-flag"></i> Stop at the paprika greenhouse</p>
                            </div>
                        </div>
                        <div className="travelport-right">
                            <div className="travelport-right-div">   
                                <div className="travelport-div-left">
                                    <h3>{v.title}</h3>
                                    <h6>DAYTRIP</h6>
                                    <p>Departing from: Barahona</p>
                                    <p><i class="fa-regular fa-clock"></i> 5-6 hours</p>
                                </div>
                                <div className="travelport-div-right">
                                    <span> $55</span>
                                    <h6>per adult</h6>
                                    <p>Transportation included</p>
                                </div>
                            </div>
                            <p className="div-right-para"><span className="right-span">Our trek begins in the village on the southern coast of Barahona</span> <br />
                                we start on a large farm where you have to stretch out your arm to pick and taste <br />
                                avocados, oranges, lemons, mangos, papayas, sapotes,guavas, passion fruit, and many <br />
                                others types of fruit.
                            </p>
                            <p className="div-right-para">After a 2-hours hike uphill, stop at a mirador (lookout-point) with an amazing  panoramic
                                view of the villages Los Patos,Ojeda and Paraiso, the river Riosito, and the hight mountains
                                of Cachote. We will continue our morning trek uphill to the village Bario Nuevo, founded by
                                a Haitian family who produces coffee within the cloud forest.
                            </p>
                            <p className="div-right-para">
                                In the afternoon (after lunch),we will cross serveral coffee farms on of the mountain
                                and then head all the way downhill to the canyon of the river Riosito. Where the trail meets
                                with the river, you can take a refreshing dip in a king-sized natural swimming pool, also a
                                popular playground for the local children.
                            </p>
                            <p className="div-right-para">Finally, we will follow the river downhill to the villge Paraiso.</p>
                            <div className="right-details-flex">
                                <div className="div-right-details">
                                    <div><img src="https://blog.milhasaereas.net/wp-content/uploads/2013/08/Tripadvisor.png" alt="" /></div>
                                    <div className="div-right-review">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className="review-p">2756 opinions</div>
                                </div>
                                <div> <button>BOOK NOW</button></div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            <div className="traveldetails-load-button"><button>LOAD MORE</button></div>


        </div>
        </>
    )
 }