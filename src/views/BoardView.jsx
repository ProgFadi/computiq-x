import axios from 'axios';
<<<<<<< HEAD
import React, { useEffect } from 'react';
import { DashboradService } from '../services/Http/DashoardService';


function BoardView(props) {
    // data state/ points
    // loading from 
    // 
    // 2
    useEffect(()=>{
    
      // update on point array

    },[])
    // 1
    return (
        <div>
           
=======
import React from 'react';
import { BASE_URL } from '../common/Constants';
import DenseTable from './BoardPoints'

function BoardView(props) {
    let data
    let boardArray
    axios.get("https://fakestoreapi.com/products?limit=13&sort=desc")
    .then((response) => {
        data = [...response.data];
        boardArray = data;
        console.log(response.data)
      }).catch((err)=>{
          console.log(err)
        });
    console.log(boardArray)
    return (
        <div>
            <h1>BoardView</h1>
            {/* <DenseTable /> */}
>>>>>>> ddf1cb0 (initial working)
        </div>
    );
}

export default BoardView;