import React, { useEffect, useState } from "react";
import './GetInspired.css';
import axios from "axios";
export default function GetInspired(){

        const [trips1,setTrip1]= useState([]);
        const [trips2,setTrip2]= useState([]);

        useEffect(()=>{

            axios.get("https://ecotour-project.vercel.app/data/readData")
            .then(res=>{
                let data = res.data.data[0].trip1;
                let temp=[];
                for(let i=0;i<data.length;i++){
                    temp.push(data[i])
                }
                setTrip1(temp)
            });

            axios.get("https://ecotour-project.vercel.app/data/readData")
            .then(res=>{
                let data= res.data.data[0].trip2;
                let temp =[];
                for(let i =0;i<data.length;i++){
                    temp.push(data[i])
                }
                setTrip2(temp)
            })

        },[])




    return (
        <>
        <div className="getinspired">
            <h2>Get Inspired</h2>
            <p>What kond of unique Excursion do you have in mind? <br />
            We can always be reached for particular requirements and take care of additional arrangements for you.</p>
        </div>

        <div className="getinspired-flex">

            <div className="flex1">
                {
                    trips1.map((v,i)=>{
                        return (
                            <div key={i} className={v.class}>
                                <img src={v.url} alt="" />
                                <div className="bg">
                                    <h4>{v.title}</h4>
                                    <p>{v.para}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex2">
            {
                    trips2.map((v,i)=>{
                        return (
                            <div key={i} className={v.class}>
                                <img src={v.url} alt="" />
                                <div className="bg">
                                    <h4>{v.title}</h4>
                                    <p>{v.para}</p>

                                </div>
                            </div>
                        )
                    })
                }
            </div>



        </div>




        </>
    )
}