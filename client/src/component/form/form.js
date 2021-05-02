import React, { useState,useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {sendetails,updatedetails} from "../../action/action";
import {Form,Button, Jumbotron} from 'react-bootstrap';
import "./form.css";

const From = ({ currentid, setid }) => {
    const dispatch=useDispatch();
    const[detail,setdetail]=useState({name:"",priority:"",duedate:""});
    const upd_detail = useSelector((state) => (currentid ? state.Details.find((x) => x._id === currentid) : null));

    const clear=()=>{
        setdetail({name:"",priority:"",duedate:""})
        setid(null);
    }


    useEffect(() => {
        if (upd_detail) setdetail(upd_detail);
      }, [upd_detail]);

    const send=async(e)=>{
        if(currentid===null){
            dispatch(sendetails(detail))
            clear()
        }
        else{
            dispatch(updatedetails(currentid,detail))
            clear()
        }
    }
    return (
        <Jumbotron className="jumbopro2">
            <Form className="center">
                <div>
                    <label className="label"> Name </label>
                    <br/>
                    <input type="text" className="inp" value={detail.name} onChange={(e)=>setdetail({...detail,name:e.target.value})}/>
                </div>
                <br/>
                <div>
                    <label  className="label"> Priority </label>
                    <br/>
                    <input type="text"  className="inp"  value={detail.priority} onChange={(e)=>setdetail({...detail,priority:e.target.value})}/>
                </div>
                <br/>
            {currentid?<>
                <div>
                    <label  className="label" > Status  </label>
                    <br/>
                    <input type="text"  className="inp" value={detail.status} placeholder="todo" onChange={(e)=>setdetail({...detail,status:e.target.value})}/>
                </div>
                </>:null}
                
                <div>
                    <label  className="label"> DueDate </label>
                    <br/>
                    <input type="Date"   className="inp" value={detail.duedate}onChange={(e)=>setdetail({...detail,duedate:e.target.value})}/>
                </div>
                <br/>
                <Button variant="primary"  size="md"  className="add" onClick={send}> {currentid?`update`:`Add`} </Button>
            </Form>
        </Jumbotron>
    )
}

export default From;
