import React, { useState } from 'react';
// import { makeStyles } from '@mui/styles';
import { Box,makeStyles } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../hooks/useAuth';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const useStyles = makeStyles(()=>({
    root:{
        display:'flex',
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#e0e0e0',
        height:'100vh'
    },
    loginBox:{
        width:'400px',
        height:'250px',
        backgroundColor:'white',
        borderRadius:'5px'
    },
    form:{
        width:'75%',
        margin:'auto',
        paddingTop:'15px',
        paddingBottom:'15px',
        boxSizing:'border-box',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        height:'100%'
    },
   
    field:{
        width:'100%'
    }
  
}))
function LoginView(props) {
    const classes = useStyles()
    const {login,error} = useAuth()
   console.log(' error is ',error)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const auth =  (e)=>{
        e.preventDefault(); 
        login(email, password);
    }
    return (
       <Box
       className={classes.root}
       >
           <Box className={classes.loginBox}>
               <form className={classes.form}>
               
               <Box>
               <TextField onChange={(e)=>setEmail(e.target.value)} className={classes.field} type="email" id="email" label="Email" variant="standard" />
                <TextField onChange={(e)=>setPassword(e.target.value)} className={classes.field} type="password" id="password" label="Password" variant="standard" />
               </Box>
               
                <Button onClick={auth}  variant="contained">LOGIN</Button>

               </form>
           </Box>
         {
             error &&   <Alert severity="error">{error}</Alert>
         }
       </Box>
    );
}

export default LoginView;