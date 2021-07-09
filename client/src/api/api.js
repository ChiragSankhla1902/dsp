import axios from "axios";


const url= 'https://projectofdsp.herokuapp.com/todo';
const url1= 'https://projectofdsp.herokuapp.com/todo/create';

export const get_Details=()=>axios.get(url);
export const send_Details =(blogcontent)=>axios.post(url1,blogcontent);
// export const update_Details=(id,improved)=>axios.patch(`${url}/${id}`,improved);
// export const delete_Details =(id)=>axios.delete(`${url}/${id}`)