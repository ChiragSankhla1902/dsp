import React, { useState,useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {sendetails,updatedetails} from "../../action/action";
import {Form,Button, Jumbotron} from 'react-bootstrap';
import "./form.css";

const From = ({ currentid, setid }) => {
    const dispatch=useDispatch();
    const[detail,setdetail]=useState({first_name:"",last_name:"",email:""});
    const upd_detail = useSelector((state) => (currentid ? state.Details.find((x) => x._id === currentid) : null));

    const clear=()=>{
        setdetail({first_name:"",last_name:"",email:""})
        setid(null);
    }


    useEffect(() => {
        if (upd_detail) setdetail(upd_detail);
      }, [upd_detail]);


    const send=async(e)=>{
            e.preventDefault();
            dispatch(sendetails(detail))
            clear()

    }
    return (
        <Jumbotron className="jumbopro2">
            <Form className="center">
                <div>
                    <label className="label"> first_name </label>
                    <br/>
                    <input type="text" className="inp"  value={detail.first_name} onChange={(e)=>setdetail({...detail,first_name:e.target.value})}/>
                </div>
                <br/>
                <div>
                    <label  className="label"> last_name </label>
                    <br/>
                    <input type="text"  className="inp"  value={detail.last_name} onChange={(e)=>setdetail({...detail,last_name:e.target.value})}/>
                </div>
                <br/>
                <div>
                    <label  className="label"> Email </label>
                    <br/>
                    <input type="email"   className="inp" value={detail.email} onChange={(e)=>setdetail({...detail,email:e.target.value})}/>
                </div>
                <br/>
                <Button variant="primary"  size="md"  className="add" onClick={send}> {`Add`} </Button>
            </Form>
        </Jumbotron>
    )
}

export default From;
