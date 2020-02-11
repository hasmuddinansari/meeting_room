import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from "../components/common/Home/Navbar"
import Dashboard from "../components/common/Home/Dashboard"
import BookingConfirm from "../components/common/Book/BookingConfirm"
import NotFound from "../components/common/NotFound"
import Login from "../components/auth/Login"
import Register from "../components/auth/Register"
import PrivateRoute from "../components/auth/PrivateRoute"
import BookedHistory from "../components/common/Book/BookedHistory"
import Confirm from "../components/common/Book/Confirm"


export default function Routes() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
            <Route path="/" exact component={Dashboard}/>
            <PrivateRoute path="/meetingRooms/:id" exact component={BookingConfirm}/>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/orders" component={BookedHistory}/>
            <Route path="/register" component={Register}/>
            <PrivateRoute path="/meetingRooms/:id/confirm" component={Confirm}/>
            <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}
