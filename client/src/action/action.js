import * as api from "../api/api";

export const getdetails=()=>async(dispatch)=>{
    try {
        const{data}=await api.get_Details();
        dispatch({type:'FETCH_ALL' ,payload:data});
    } catch (error) {
        console.log(error)
    }
};

export const sendetails=(blog)=>async(dispatch)=>{
    try {
        
        const {data} =await api.send_Details(blog);
        dispatch({type:'CREATE',payload:data});
    } catch (error) {
        console.log(error)
    }
};

// export const updatedetails=(id,upblog)=>async(dispatch)=>{
//     try {
//         const {data}=await api.update_Details(id,upblog);
//         dispatch({type:'UPDATE',payload:data})
//     } catch (error) {

//         console.log(error)
//     }
// };

// export const deletedetails=(id)=>async(dispatch)=>{
//     try {
//         const{data}=await api.delete_Details(id)
//         dispatch({type:'DELETE',payload:data})
//     } catch (error) {
//         console.log(error)
        
//     }
// };


