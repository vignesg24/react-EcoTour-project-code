import React, { useEffect, useState } from "react";
import './FeatureTravel.css';
import axios from "axios";
export default function FeatureTravel(){

    const [data,setData]= useState([]);

    useEffect(()=>{

        axios.get("https://ecotour-project.vercel.app/data/readData")
        .then(res=>{
            let data = res.data.data[0].data;
            let temp=[];
            for(let i=0;i<data.length;i++){
                temp.push(data[i])
            }
            setData(temp)
        })
    },[])
    return(
        <>
        <div className="featuretravel">
        <h2>Featured Travel Experiences</h2>
            <div className="featuretravel-image">
                {
                    data.map((v,i)=>{
                        return(
                            <div key={i} className="feature-part">
                                <img src={v.url} alt="" />
                                <div className="feature-text">
                                    <p className="feature-title">{v.title}</p>
                                    <p className="feature-price">{v.price}</p><br />
                                    <span>{v.txt1}</span><br />
                                    <span>{v.txt2}</span><br />
                                    <span><i class="fa-regular fa-clock"></i> {v.txt3}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="feature-load"><button>LOAD MORE</button></div>
        </div>
        </>
    )
}