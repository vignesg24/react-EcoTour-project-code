import React, { useEffect, useState } from "react";
import './ThreeImg.css';
import axios from "axios";
export default function ThreeImg(){
    const [threeFace,setThreeFace]=useState([]);

    useEffect(()=>{
        axios.get("https://ecotour-project.vercel.app/data/readData")
        .then(res=> {
            console.log(res);
            let data = res.data.data[0].threeFace;
            let temp = [];
             for(let i=0;i<data.length;i++){
                temp.push(data[i])
             }
             setThreeFace(temp)

        })
        

    },[])





    return(
        <>
        <div className="threeimg">
            <div className="threeimg-img">
                {
                    threeFace.map((v,i)=>{
                        return(
                            <div key={i}>
                                <img src={v.url} alt="" />
                            </div>
                        )
                    })

                }
            </div>
        </div>
        </>
    )
}