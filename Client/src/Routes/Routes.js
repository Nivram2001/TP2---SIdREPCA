import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from '../pags/Login_pag'
import Agentes from '../pags/Agentes'
import Viagens from '../pags/Viagem_pag'
import Navios from '../pags/Navios_pag'
import CUNavios from '../pags/CU_Navios'
import CUViagens from '../pags/CU_Viagens'
import Registo from '../pags/Registo_pag'
import Welcome from '../pags/Welcome'


const Routes_pag = () => {
    let log = sessionStorage.getItem('logged')
    let admin = sessionStorage.getItem('admin')
    if(log=='true'){
        return (
            <Router>
                <Routes>
                    <Route element={<Login />} path='/' exact></Route>
                    <Route element={<Navios />} path='/Navios' exact></Route>
                    <Route element={<CUNavios />} path='/CU_Navios' exact></Route>
                    <Route element={<CUViagens />} path='/CU_Viagens' exact></Route>
                    <Route element={<Welcome />} path='/welcome' exact></Route>
                    <Route element={<Viagens />} path='/Viagens' exact></Route>
                    <Route element={<Registo />} path='/Registo' exact></Route>
                    <Route element={<h1>ROUTER NOT FOUND OR UNAUTHORIZED ACCESS</h1>} path='*' ></Route>
                </Routes>
            </Router>
        )
    }else if(log == 'true' && admin == 'true'){
        return (
            <Router>
                <Routes>
                    <Route element={<Login />} path='/' exact></Route>
                    <Route element={<Agentes />} path='/Agentes' exact></Route>
                    <Route element={<Navios />} path='/Navios' exact></Route>
                    <Route element={<CUNavios />} path='/CU_Navios' exact></Route>
                    <Route element={<CUViagens />} path='/CU_Viagens' exact></Route>
                    <Route element={<Welcome />} path='/welcome' exact></Route>
                    <Route element={<Viagens />} path='/Viagens' exact></Route>
                    <Route element={<Registo />} path='/Registo' exact></Route>
                    <Route element={<h1>NOT FOUND: 404</h1>} path='*' ></Route>
                </Routes>
            </Router>
        )
    }
    else{
        return (
            <Router>
                <Routes>
                    <Route element={<Login />} path='/' exact></Route>
                    <Route element={<Registo />} path='/Registo' exact></Route>
                    <Route element={<Welcome />} path='/welcome' exact></Route>
                    <Route element={<h1>NOT FOUND: 404</h1>} path='*' ></Route>
                </Routes>
            </Router>
        )
    }
    




}
export default Routes_pag