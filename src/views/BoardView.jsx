import React, {useEffect, useState} from 'react';
import styled from "styled-components";
// import {DashboardService} from "../services/Http/dashboard";
import axiosInstance from "../utils/axios";
import {SESSION_KEY} from "../common/Constants";
import axios from "axios";
// import Pagination from '../components/Pagination';

const Bodyd=styled.div`
  background-color:white;
  margin-left: 600px;
  -webkit-box-shadow: 3px 3px 5px 6px blue;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px blue;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 3px 5px 6px blue;
  //box-shadow: inset 0 0 10px blue;

  border-radius: 30px;
  //margin-right: 1500px;
  margin-top: 50px;
  //padding-top: 40px;
  width: 330px;
`;

const Rowdiv=styled.div`
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
  flex-direction: row;
  align-items: start;

`;

function BoardView(props) {
    const [dashboard, setdashboard] = useState([]);

    // const apiToken =JSON.parse(localStorage.getItem(SESSION_KEY));
    const token='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3YjgyZjZjLTgwNmUtNGUwMy04NWRkLTU5NjVmZTc2MWY0ZiIsImV4cCI6MTY0NDc3OTI5OSwic3ViIjoiYWNjZXNzIn0.t8g0AmABZX15lcBvCKa5y3Cjc97rVPCX9CXEy2z2Kac';

    useEffect(()=>{
        axios.get('https://website-backend.computiq.tech/api/score/data/5' ,
            { headers: {"Authorization" : token}
            }).then(
            (res)=>{

                const req=res.data.data;
                console.log(res.data)
                setdashboard(req);


            }
        )
    })



    return (
        <div style={{background:'$F5F5F5'}}>
            <Bodyd>

                <p style={{padding:'20px',fontSize:'20px'}}>SCORE BOARD</p>
                {
                    dashboard.map((item,index)=>
                     <Rowdiv>

                         <p>{item.user__first_name+'  '+item.user__last_name}</p>
                         <p>{item.total_score} points</p>

                     </Rowdiv>
                        )
                    }
                    

            </Bodyd>
        </div>
    );
}

export default BoardView;