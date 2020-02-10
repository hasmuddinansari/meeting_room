import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from "../components/common/Home/Navbar"
import Dashboard from "../components/common/Home/Dashboard"
import BookingConfirm from "../components/common/Book/BookingConfirm"
import NotFound from "../components/common/NotFound"
import Login from "../components/auth/Login"


export default function Routes() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/meetingRooms/:id" exact component={BookingConfirm}/>
            <Route path="/login" component={Login}/>
            <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}
