import React, { useEffect, useState } from "react";
import './TravelExp.css';
import axios from "axios";
export default function TravelExp(){

  

        const [travelData, setTravelData] = useState([]);
        const [travelData1,setTravelData1] = useState([]);
        const [travelData2,setTravelData2] = useState([]);


        // axios method


      useEffect(()=>{
        axios.get("https://ecotour-project.vercel.app/data/readData")
        .then(res =>{
          let data = res.data.data[0].travelExp1;
          let temp = [];
          for(let i=0; i<data.length;i++){
            temp.push(data[i])
          }
          setTravelData(temp);

        });


        axios.get("https://ecotour-project.vercel.app/data/readData")
        .then(res => {
          let data = res.data.data[0].travelExp3;
          let temp = [];
          for(let i=0;i<data.length;i++){
            temp.push(data[i])
          }
          setTravelData1(temp)
        })
       


        axios.get("https://ecotour-project.vercel.app/data/readData")
        .then(res => {
          let data = res.data.data[0].travelExp2;
          let temp =[];

          for(let i=0;i<3;i++){
            temp.push(data[i])
          }
          setTravelData2(temp);
        });
      },[])


    return (
        <>
        <div className="travelExp">
            <h2>Featured Travel Experiences</h2>
            <div className="travelExp-photos">
            <div className="travelExp-one">
            {
                travelData.map((v,i)=>{
                    return (
                      <div key={i} className={v.class}>
                        <div>
                          <img src={v.image} alt="" />
                        </div>
                        <div className="travelExp-title">
                        <h5>{v.title}</h5>
                        <p>{v.price}</p>
                        <span>{v.txt1}</span><br />
                        <span>{v.txt2}</span><br />
                        <span><i class="fa-regular fa-clock"></i> {v.txt3}</span>
                        </div>
                      </div>
                    );
                })
            }
            </div>
            <div className="travelExp-two">
            {
             travelData1.map((v,i)=>{
                return (
                  <div key={i} className={v.class}>
                    <div>
                      <img src={v.image} alt="" />
                    </div>
                    <div className="travelExp-title">
                    <h5>{v.title}</h5>
                        <p>{v.price}</p>
                        <span>{v.txt1}</span><br />
                        <span>{v.txt2}</span><br />
                        <span><i class="fa-regular fa-clock"></i> {v.txt3}</span>
                        </div>
                  </div>
                );
            })   
            }
            </div>
            <div className="travelExp-three">
            {
                travelData2.map((v,i)=>{
                    return (
                      <div key={i} className={v.class}>
                        <div>
                          <img src={v.image} alt="" />
                        </div>
                        <div className="travelExp-title">
                        <h5>{v.title}</h5>
                        <p>{v.price}</p>
                        <span>{v.txt1}</span><br />
                        <span>{v.txt2}</span><br />
                        <span><i class="fa-regular fa-clock"></i> {v.txt3}</span>
                        </div>
                      </div>
                    );
                })
            }
            </div>
            </div>
        </div>
        </>
    )
}