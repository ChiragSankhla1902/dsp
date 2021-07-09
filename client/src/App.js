import './App.css';
import Form from "./component/form/form";
import { useDispatch,useSelector} from 'react-redux';
import { useEffect,useState } from 'react';
import { getdetails,deletedetails } from './action/action';
import {Button, Table} from 'react-bootstrap';
import Tables1 from './component/table/table';
import {Switch,Route, BrowserRouter} from "react-router-dom";
import Navbar1 from './component/navbar/Navbar1';

const App = () =>{

  const [currentid, setid] = useState(null);
  const Det = useSelector((state) =>state.Details);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getdetails());
  }, [currentid,dispatch]);

  return<>
          <BrowserRouter>
            <Navbar1/>
            <Switch>
              <Route exact path={["/","/Home","/home"]}>
                <Form currentid={currentid} setid={setid}/>
              </Route>
              <Route exact path={["/allcontact","/Allcontact"]}>
                <Tables1 Det={Det} />
              </Route>
            </Switch>
          </BrowserRouter>
        </>
}

export default App;
