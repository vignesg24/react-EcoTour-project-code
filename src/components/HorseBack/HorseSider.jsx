import React, { useState } from 'react';
import './HorseSider.css';


export default function HorseSider() {
    const [title,setTitle]=useState('HIGHLIGHTS');

    const horseClick= (name)=>{
        setTitle(name)
    }

    const  horseSider = (name)=>(
        <div onClick={()=>{horseClick(name)}}>{name}</div>
        )

  return (
    <>
       <div className="horseback-fullpage">
            <div className="horseback-h2"><h2>Horseback to the mountains of Paraiso</h2></div>
            <div className="horseback-sider">
            {horseSider("HIGHLIGHTS")}
            {horseSider("DESCRIPTION")}
            {horseSider("GALERY")}

            </div>
            <div id="hr"><hr className="hr"/></div>
            {title==="HIGHLIGHTS" && (
                <div className="hightlight">
                <div className="hightlight-left">
                    <p className="hight-p"><span>ROUTE:</span> Barahona - Paraiso</p>
                    <p><i class="fa-regular fa-clock"></i> Horseback riding / Duration: 3-4 hours</p><hr />
                    <p><i class="fa-solid fa-location-dot"></i> Departing from: Barahona</p><hr />
                    <p><i class="fa-solid fa-camera"></i> Panoramic view over the Caribbean Sea</p><hr />
                    <p><i class="fa-solid fa-water"></i> Ride throught a river</p><hr />
                    <p><i class="fa-solid fa-flag"></i> Stop the paprika greenhouse</p><hr />
                    <div className="hightlight-adult">
                        <p className="adult-p"><span>$60</span> per adult </p>
                        <p>Guaranteed departures from 2
                            adults on
                        </p>
                        
                    </div>
                </div>
                <div className="hightlight-right"></div>
            </div>
            )}

            {title==="DESCRIPTION"&&(
                <div className="description">
                <div className="description-left">
                    <p><span>ROUTE: </span>Barahona - Paraiso</p>
                    <div className="description-timeline">
                        <div className="timeline-one">
                            <div className="line-one">1 hour</div>
                            <div className="line-two">
                                <div className="line-icon-1"><i class="fa-solid fa-location-dot"></i></div>
                                <div className="line-two-1"></div>
                                <div className="line-two-2"></div>
                            </div>
                            <div className="line-thre">Barahona</div>
                        </div>
                    </div>
                    <div className="description-timeline">
                        <div className="timeline-one">
                            <div className="line-one">30 min</div>
                            <div className="line-two">
                                <div className="line-two-1"></div>
                                <div className="line-two-2"></div>
                            </div>
                            <div className="line-three">Caribbean sea Panoramic view</div>
                        </div>
                    </div>
                    <div className="description-timeline">
                        <div className="timeline-one">
                            <div className="line-one">1 hour</div>
                            <div className="line-two">
                                <div className="line-two-1"></div>
                                <div className="line-two-2"></div>
                            </div>
                            <div className="line-three">River Ride</div>
                        </div>
                    </div>
                    <div className="description-timeline">
                        <div className="timeline-one">
                            <div className="line-one">30 min</div>
                            <div className="line-two">
                                <div className="line-two-1"></div>
                                <div className="line-icon-2"><i class="fa-solid fa-flag"></i><span>Paraiso</span></div>
                            </div>
                            <div className="line-three">Paprika Greenhouse</div>
                        </div>
                    </div>
                    
                </div>
                <div className="description-right">
                    <h5>Go on horseback to mountains of Paraiso. Visit, accompanied by a local guide, the small farms
                        of the locals livings in the municipality of"Villa Nizao" where bananas coffee,cocoa and avodos
                        are grown.
                    </h5>
                    <p>The tour strat early in the morning with the ascent to the mountains od Paraiso. The path leads,past 
                        small communities,up to Villa Nizao(small mountains village).During The ascent,we will make some stops
                        to admire the panoramic views over the coast of Paraiso and to expore the communites od Dominican
                        and Haitian farmers on our way
                    </p>
                    <p>The way back leads through the fresh and clear water of the river "Nizaito",back to village of Paraiso.On the way down we make another stop where you have the change to visit a greenhouse where paprika your hotel by car.
                    </p>

                    <button>BOOK NOW</button>
                </div>
            </div>
            )}

            {title==="GALERY"&&(
                <div className="gallery">
                <div className="gallery-left">
                    <div><img src="https://tecnohotelnews.com/wp-content/uploads/2019/06/republica-dominicana-ecoturismo.jpg" alt="" /></div>
                    <div><img src="https://th.bing.com/th/id/OIP.XrOYZiixoUCQAXY4BKJIQgHaE7?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
                    <div><img src="https://th.bing.com/th/id/OIP.PfAGdpg213P5PqGTZ1RBsQHaJy?w=130&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
                    <div><img src="https://th.bing.com/th/id/OIP.wQlF-B6OKYR2i9oUwzmZgQHaE1?w=209&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
                    <div><img src="https://th.bing.com/th/id/OIP.QIUlm42iwmWk2rIkLpeqIAHaEV?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
                    <div><img src="https://th.bing.com/th/id/OIP.qJmIwixmIjZacJz_lGlA2QHaFj?w=225&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
                </div>
                <div className="gallery-right">
                    <img src="https://th.bing.com/th/id/OIP.F6MueCozUV-oGOGWadjUQgHaD8?rs=1&pid=ImgDetMain" alt="" />

                </div>
            </div>
            )}


        </div>
    </>
  )
}
