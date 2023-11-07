/*import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home' 
import Users from './user/Users.jsx'
const MainRouter = () => {
return ( <div> 
<Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route path="/users" component={Users}/>
        
        
        
</Routes>
</div> 
)
}
export default MainRouter
*/

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./core/Home";
import Profile from "./user/Profile.jsx";
import Users from "./user/Users.jsx";

import Signup from "./user/Signup.jsx";
import Signin from "./auth/Signin.jsx";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:userId" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};
export default MainRouter;
