export const handleResponse = (err) => {
    let resp = null
    if(err.response)
    {
        resp = {}

        switch(err.response.status)
        {
            case 401:
            resp = {
                message:err.response.data.message,
                statusCode:err.response.status
            } 
            console.log(resp)
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