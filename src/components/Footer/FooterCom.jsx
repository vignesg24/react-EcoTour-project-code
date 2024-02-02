import React from "react";
import './FooterCom.css';

export default function FooterComponent(){
    return(
        <>
        <div className="footercomponent">
            <div className="footer-top">
                <div className="book">
                    <div><img src="https://pluspng.com/img-png/calendar-icon-360.png" alt="" /></div>
                    <div className="para">
                        <p className="color">Book Now</p>
                        <p id="p">lorem ipsum dolor sit</p>
                    </div>
                </div>
                <div><button>CHECK THE DATES</button></div>

            </div>
            <div className="footer-buttom">
                <div>
                    <img className="png1" src="https://grupoeconectate.files.wordpress.com/2015/10/cropped-logo1.png?w=768&h=175" alt="" />
                    <p id="p1">Ecotour Barahona is your favourite specialist for authenic, unique and memorable round trips, day trips and activities in southwest of Dominican Republic.</p>
                    <img className="png2" src="https://vacations.united.com/contentassets/af7f0b4c524f4d53a5f8e4085a0090cd/dominican-republic_logo_600x293.png" alt="" />
                    <p id="p2">Travel enviromentally friends with us and discover the main destinations of the Dominican Repubilc</p>
                </div>
                <div>
                    <h5>ABOUT US</h5>
                    <ul>
                        <li>ABOUT ECOTOUR</li>
                        <li>BARAHONA</li>
                        <li>OUR TEAM</li>
                        <li>GUESTBOOK</li>
                        <li>IMPRINT</li>
                    </ul>
                </div>
                <div>
                    <h5>CUSTOMER SERVICE</h5>
                    <ul>
                        <li>BOOKING CONDITIONS</li>
                        <li>CONTACT-US</li>
                        <li>FAQ'S</li>
                        <li>LEGAL NOTICE</li>
                        <li>PRIVACY POLICY</li>
                    </ul>
                </div>
                <div className="rs">
                    <h5>RESERVATIONS &<br /> BOOKINGS</h5>
                    <p>MONDAY TO FRIDAY</p>
                    <span>From 8:00 am to 8:00pm</span>
                    <p>SATURSDAY TO SUNDAY</p>
                    <span>From 9:00 am to 5:00pm</span>
                    <p>Atlantic standard Time</p>
                    <span>+1 (809)805 2260</span>
                </div>
                <div className="icon">
                    <h5>FOLLOW US</h5>
                    <span><i class="fa-brands fa-facebook-f"></i></span>
                    <span><i class="fa-brands fa-instagram"></i></span>
                    <span><i class="fa-brands fa-twitter"></i></span>
                </div>
            </div>
        </div>
        
        </>
    )
}
