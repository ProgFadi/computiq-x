import React from 'react';
import styled from "styled-components";


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


const Dashboard = ({ dashboard, loading }) => {
  if (loading) {
    return <h2 style={{paddding:'80px'}}>Loading...</h2>;
  }

  return (
      <div>

        {
          dashboard.map((item,index)=>
              <Rowdiv>

                <p>{item.user__first_name+'  '+item.user__last_name}</p>
                <p>{item.total_score} points</p>

              </Rowdiv>    )
        }
      </div>


  );
};

export default Dashboard;