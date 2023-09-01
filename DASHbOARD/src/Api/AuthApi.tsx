import axios from "axios"

const URL : string = "http://localhost:7896/api/v1"

export const registerUser = async (data : any) =>{
    try {
        
       const config  = {
            "Content-type" : "multipart/formdata"
        }

        return await axios.post(`${URL}/create-user`, data, config).then((res : any)=>{
            res.data.data
        })

    } catch (error) {
        console.log(error);
        
    }
}


export const signUser = async (data: any, userID : any) => {
    try {
        const response = await axios.post(`${URL}/${userID}/sign-in`, data);
        return response.data.data;
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            console.error("API endpoint not found (404)");
        } else {
            console.error("An error occurred:", error);
        }
        throw error;
    }
};


export const viewUsers = async () =>{
    try {
        
        return await axios.get(`${URL}/view`).then((res : any)=>{
            return res.data.data
        })

    } catch (error) {
        console.log(error);
        
    }
}

export const viewUser = async (id : string) =>{
    try {
        
       return await axios.get(`${URL}/${id}`).then((res : any)=>{
        return  res.data.data
        })

    } catch (error) {
        console.log(error);
        
    }
}