import React, {useEffect, useState} from 'react';
import styled from "styled-components";
// import {DashboardService} from "../services/Http/dashboard";
import axiosInstance from "../utils/axios";
import {SESSION_KEY} from "../common/Constants";
import axios from "axios";
import Pagination from '../components/Pagination';

const Bodyd=styled.div`
  background-color:white;
  margin-left: 600px;
  box-shadow: blue;
  -o-box-shadow: darkblue;
  height: 550px;
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
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [datasPerPage] = useState(7);
    // const apiToken =JSON.parse(localStorage.getItem(SESSION_KEY));
    const token='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3YjgyZjZjLTgwNmUtNGUwMy04NWRkLTU5NjVmZTc2MWY0ZiIsImV4cCI6MTY0NDc3OTI5OSwic3ViIjoiYWNjZXNzIn0.t8g0AmABZX15lcBvCKa5y3Cjc97rVPCX9CXEy2z2Kac';

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
    useEffect(()=>{
        axios.get('https://website-backend.computiq.tech/api/score/data/5' ,
            { headers: {"Authorization" : token}
            }).then(
            (res)=>{
                setLoading(true);
                const req=res.data.data;
                console.log(res.data)
                setdashboard(req);
                setLoading(false);

            }
        )
    })
    //program__title: "Full-Stack Development Bootcamp"
    // total_score: "64"
    // user__first_name: "Karrar"
    // user__last_name: "Emad Ali"
    // user__score_profile__photo: "🖱"

    // Get current datas
    const indexOfLastDatas = currentPage * datasPerPage;
    const indexOfFirstData = indexOfLastDatas - datasPerPage;
    const currentDatas = dashboard.slice(indexOfFirstData, indexOfLastDatas);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

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
                    

                {/*<Datas datas={currentDatas} loading={loading} />*/}
                <Pagination
                    datasPerPage={datasPerPage}
                    totaldatas={dashboard.length}
                    paginate={paginate}
                />
            </Bodyd>
        </div>
    );
}

export default BoardView;