import './App.css';
import Form from "./component/form/form";
import { useDispatch,useSelector} from 'react-redux';
import { useEffect,useState } from 'react';
import { getdetails,deletedetails } from './action/action';
import {Button, Table} from 'react-bootstrap';

const App = () =>{

  const [currentid, setid] = useState(null);
  const Det = useSelector((state) =>state.Details);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getdetails());
  }, [currentid,dispatch]);

  return<>
          <h1>CRUD OPERATION</h1>
          <Form currentid={currentid} setid={setid}/>
          <br/>
          <br/>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>duedate</th>
                  <th>Priority</th>
                </tr>
            </thead>
            <tbody>
          {Det.map((val,index)=>{
            return <tr key={val._id}> <td>{index}</td> <td>{val.name}</td> <td>{val.status}</td> <td> {val.duedate}</td> <td> {val.priority} </td>
            <td><Button variant="primary"  size="md" className="mx-1" onClick={()=>setid(val._id)}>update</Button>
            <Button variant="danger"  size="md" className="mx-1" onClick={()=>dispatch(deletedetails(val._id))}>Done</Button>
            </td>
            </tr>
          })}
            </tbody>
          </Table>
          </div>
          <br/>
        </>
}

export default App;
