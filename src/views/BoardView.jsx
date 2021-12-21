import axios from 'axios';
import React, {useEffect, useState } from 'react';
import styles from "../App.module.css";
import Table from "../components/Table";
function BoardView() {
    const [pointsList, setpointsList] = useState(([]))
    useEffect(()=>{

        let webApiUrl =  'https://website-backend.computiq.tech/api/score/data/5';
        let tokenStr = JSON.parse(localStorage.getItem('token'));
        axios.get(webApiUrl, { headers: {"Authorization" : `${tokenStr.token.token_type} ${tokenStr.token.access_token}`} }).then((response)=>{
            setpointsList(response.data.data)
        })
    },[])
    return (
        <main className={styles.container}>
        <div className={styles.wrapper}>
          <Table data={pointsList} rowsPerPage={10} />
        </div>
      </main>
    );
}

export default BoardView;