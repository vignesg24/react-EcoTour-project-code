import React from "react";
import './Profile.css';
export default function Profile(){
    return(
        <>
        <div className="profile">
            <div className="profile-data">
                <div className="data1">
                    <h3>Lorem ipsum dolor</h3>
                    <h3>sit amet</h3>
                    <button>SEE ALL OPNIONS</button>
                </div>
                <div className="data2">
                    <div className="coma" ><img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/inverted-commas-1-648947.png" alt="" /></div>
                    <div>
                        <div className="image"><img src="https://th.bing.com/th/id/R.6489489344e78c919a4eff17b6d5e3be?rik=M8Ab2HwZX3T43A&riu=http%3a%2f%2fmichaelanthonysalondc.com%2fwp-content%2fuploads%2f2019%2f04%2fbigstock-Handsome-man-in-black-suit-wit-240819310.jpg&ehk=LRadvB%2bbRUwfbFRkq6QE4LOGECaQIbcntwyedoltKvE%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
                        <div>
                            <h6>LUCIA JOHNSON</h6>
                            <p className="p1">A ros sodales proin pretium nulla a arcu molestie.</p>
                            <p className="p2">A Proin ullamcorper justo risus, sodales vulputate magna</p>
                            <p className="p3">ullamcorper ut morbi venenatis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}