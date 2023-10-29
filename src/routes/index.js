import React from "react";
import { Routes, Route} from "react-router-dom";
import Signup from "../components/Sign-up";
import Login from "../components/login";
const Index = () => {
    return (
      <>
        
          <Routes>
          
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          </Routes>
        
      </>
    );
  };
  export default Index;