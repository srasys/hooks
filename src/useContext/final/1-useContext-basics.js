import React, { useState } from "react";

import ChildComponent from "./ChildComponent";

const ParentComponent =()=>{

    const [userDetails,setUserDetails]=useState({
        firstName:'hi',
        lastName:'chinna',
        email:'abc@gmail.com'
    });

    return(
        <div>
            <h1>context from parent</h1>
            <ChildComponent userDetails={userDetails}/>
        </div>
    )
}

export default ParentComponent;
