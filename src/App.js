import React, {useEffect} from "react";
import "./global.css";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Students from "./components/Students/Students";
import Glavnaya from "./components/Glavnaya/Glavnaya";
import Navigation from "./components/Navigation/Navigation";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import News from "./components/News/News";
import ModalAccounts from "./components/ModalAccounts/ModalAccounts";
import {useDispatch, useSelector} from "react-redux";
import {entrance_user} from "./redux/actions";
import Personal from "./components/Personal/Personal";
import ErrorPersonal from "./components/ErrorPersonal/ErrorPersonal";


function App() {

const dispatch = useDispatch();
    let getUser = JSON.parse(localStorage.getItem("test"));
const link = useSelector(state => {
    return state
})
    useEffect(() => {
        let getUser = JSON.parse(localStorage.getItem("test"));
        if(getUser){
            dispatch(entrance_user(getUser))
        }

    }, [])
    
  return (
      <div>
          <Router>
              <Navigation/>
              <Routes>
                  <Route path='/' element={<Glavnaya />} />
                  <Route path='/students' element={<Students />} exact/>
                  <Route path='/news' element={<News />} exact/>
                  {getUser ?
                  <Route path="/personal" element={<Personal />} exact/> :
                      <Route path='/personal' element={<ErrorPersonal />} exact/>
                  }
              </Routes>
              <ToastContainer />
              <ModalAccounts/>
          </Router>
      </div>
  );
}

export default App;
