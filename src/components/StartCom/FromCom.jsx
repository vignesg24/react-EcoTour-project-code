import React, { useState,useRef } from 'react';
import './FromCom.css';

export default function FromCom() {
    const [travelFrom,setTravelFrom]=useState('started');

    const fNameRef = useRef();
    const lNameRef = useRef();
    const numberRef = useRef();
    const emailRef = useRef();
    const massegeRef = useRef();
    const  numberAdultRef = useRef();
    const numberChildrenRef = useRef();
    const dateRef = useRef();


    const TravelFrom = (tab)=>{
        setTravelFrom(tab);

    }


  return (
    <div>
      {travelFrom === "started" && (
        <div className="startCom">
          <h2>Let's Get Started</h2>
          <div className="startcom-flex">
            <div>
              <h1>
                <i class="fa-brands fa-searchengin"></i>
              </h1>
              <p>Select your travel experience</p>
            </div>
            <div>
              <h1>
                <i class="fa-regular fa-user"></i>
              </h1>
              <p>Choose a departure date</p>
            </div>
            <div>
              <h1>
                <i class="fa-solid fa-phone"></i>
              </h1>
              <p>Call us to book your trip</p>
            </div>
          </div>
          <div className="start-button">
            <button
              onClick={() => {
                TravelFrom("travelExp");
              }}
            >
              GET STARTED!
            </button>
          </div>
        </div>
      )}
      {travelFrom === "travelExp" && (
        <div className="formcom opacit">
          <div className="formcom-travelexp">
            <div className="inp1">
              <label htmlFor="">SELECT YOUR TRAVEL EXPERIENCE</label>
              <br />
              <select name="" id="">
                <option value="">
                  Discover the Larimar and the Deep South
                </option>
              </select>
            </div>
            <div className="inp2">
              <label htmlFor="">Select date</label>
              <br />
              <input type="text" name="" id="" ref={dateRef} required />
            </div>
            <div className="inp3">
              <label htmlFor="">Number of adults*</label>
              <br />
              <input type="number" name="" id="" ref={numberAdultRef} />
            </div>
            <div className="inp4">
              <label htmlFor="">Number of children</label>
              <br />
              <input type="number" name="" id="" ref={numberChildrenRef} />
            </div>
          </div>
          <div className="formcom-details">
            <div>
              <label htmlFor="">Frist name*</label>
              <br />
              <input type="text" name="" id="" ref={fNameRef} />
            </div>
            <div>
              <label htmlFor="">Last name*</label>
              <br />
              <input type="text" name="" id="" ref={lNameRef} />
            </div>
            <div>
              <label htmlFor="">Email*</label>
              <br />
              <input type="email" name="" id="" ref={emailRef} />
            </div>
            <div>
              <label htmlFor="">phone*</label>
              <br />
              <input type="number" name="" id="" ref={numberRef} />
            </div>
          </div>
          <div className="formcom-message">
            <div className="message-left">
              <label htmlFor="">Message*</label>
              <br />
              <textarea
                name=""
                id=""
                cols="30"
                rows="6"
                ref={massegeRef}
              ></textarea>
            </div>
            <div className="message-right">
              <div>
                <label htmlFor="">I'm from:*</label>
                <br />
                <select name="" id="">
                  <option value="">Afghanistan</option>
                </select>
              </div>
              <div className="message-checkbox">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <p>I have read and agree to the privacy policy</p>
                </div>
              </div>
            </div>
          </div>
          <div className="message-button">
            <button className="msg-btn" type="submit" onClick={()=>{TravelFrom("details")}}>
              SEND TRAVEL REQUEST
            </button>
          </div>
        </div>
      )}
     {travelFrom === "details" && (
         <div className="view-page">
         <div className="view-page-from">
           <h2>Check Details</h2>
           <div className="from-div">
             <div>
               <label htmlFor="">Select date</label>
               <p>{dateRef.current.value}</p>
             </div>
             <div>
               <label htmlFor="">Number of adults</label>
               <p>{numberAdultRef.current.value}</p>
             </div>
             <div>
               <label htmlFor="">Number of children</label>
               <p>{numberChildrenRef.current.value}</p>
             </div>
           </div>
           <div className='from-text'>
             <p>Frist Name : <span>{fNameRef.current.value}</span></p>
             <p>Last Name : <span>{lNameRef.current.value}</span></p>
             <p>Email : <span>{emailRef.current.value}</span></p>
             <p>Phone : <span>{numberRef.current.value}</span></p>
             <p>Message : <span>{massegeRef.current.value}</span></p>
             <button onClick={()=>{TravelFrom("started")}}>BACK TO FROM</button>
           </div>
         </div>
       </div>
     )}
    </div>
  );
}
