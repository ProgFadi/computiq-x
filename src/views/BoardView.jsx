import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {DashboardService} from "../services/Http/dashboard";
import axiosInstance from "../utils/axios";
import {SESSION_KEY} from "../common/Constants";
import axios from "axios";

const Bodyd=styled.div`
background-color:white;
  margin-left: 600px;
  box-shadow: blue;
  height: 550px;
  border-radius: 30px;
  //margin-right: 1500px;
  margin-top: 50px;
  //padding-top: 40px;
  width: 330px;
`;

const Rowdiv=styled.div`
display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

function BoardView(props) {
    const [board,setboard]= useState([]);
    // const apiToken =JSON.parse(localStorage.getItem(SESSION_KEY));
    const token=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3YjgyZjZjLTgwNmUtNGUwMy04NWRkLTU5NjVmZTc2MWY0ZiIsImV4cCI6MTY0NDc3OTI5OSwic3ViIjoiYWNjZXNzIn0.t8g0AmABZX15lcBvCKa5y3Cjc97rVPCX9CXEy2z2Kac`;

    // useEffect(()=>{
    //     (new DashboardService).loadDashboard(token).then(
    //         (res)=>{
    //             res=res.data;
    //             setboard(res)
    //         }
    //     ).catch(
    //         console.log('error')
    //     )
    //     },[]
    // )
    axios.get('https://website-backend.computiq.tech/api/score/data/5' ,
        { headers: {"Authorization" : ` ${token}`}
    }).then(
        (res)=>{
            res=res.data;
            setboard(res)

        }
    )
    //program__title: "Full-Stack Development Bootcamp"
    // total_score: "64"
    // user__first_name: "Karrar"
    // user__last_name: "Emad Ali"
    // user__score_profile__photo: "🖱"
    return (
        <div style={{background:'$F5F5F5'}}>
            <Bodyd>

                <p style={{padding:'20px',fontSize:'20px'}}>SCORE BOARD</p>
                {
                    board.map((item)=> <Rowdiv>
                        <p>item.user__first_name</p>
                        <p>lkk</p>
                    </Rowdiv>)
                }
            </Bodyd>
        </div>
    );
}

export default BoardView;