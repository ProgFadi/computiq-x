export const handleResponse = (err) => {
    let resp = null
    if(err.response)
    {
        resp = {}

        Routes(err.response.status)
        {
            case 401:
            resp = {
                message:err.response.data.message,
                statusCode:err.response.status
            } 
            console.log(resp)
            // window.location.href='/login'
            break;
            case 422:
            let msg = '';
            console.log('err object: ',err.response)
            let details = err.response.data.detail
            if(details)
            {
                details.map((m)=>{
                    msg = msg + ", "+m.msg
                })
            } 
            resp = {
                message:msg,
                statusCode:err.response.status
            } 
            console.log('object created: ',resp)
            // window.location.href='/login'
            break;

            case 404:
            resp ={
                    message:err.response.data.message,
                    statusCode:err.response.status
            }
            break;

        }
        
    }
    else if(err.request)
    {
        console.log(err.status)
        console.log("Error in the client side at request")
       
    }
    else{
        resp = {
            message:'Unknown error!',
            statusCode:-1
        }
    }
    console.log('respo in handler is: ',resp)
    return resp;
    
}