import React,{ useEffect }  from 'react'
import {Button, Table} from 'react-bootstrap';

const Tables1 = ({Det}) => {
    return (
        <div>
        <Table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>First_name</th>
              <th>Last_name</th>
              <th>Email</th>
            </tr>
        </thead>
        <tbody>
      {Det.map((val,index)=>{
        return <tr key={val._id}> <td>{index}</td> <td>{val.first_name}</td> <td>{val.last_name}</td> <td> {val.email}</td>
        </tr>
      })}
        </tbody>
      </Table>
      </div>
    )
}

export default Tables1
