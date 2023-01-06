import React, { useState } from "react";

const Index =()=>{
    const initialObj={
        firstNamne:'Ranjith',
        lastName:'Kuamr',
        age:'27'

    }
    const [data,setData]=useState(initialObj);

    const changeFisrtName =()=>{

        //spread operator performing here
        setData({
            ...data,
            firstNamne:'srikanth',
        })
    }
    const changeLastName =()=>{
       //spread operator performing here
       setData({
        ...data,
        lastName:'Hero Honda',
    }) 
    }
    return(
        <div>
            <h1>{data.firstNamne}</h1>
            <button onClick={changeFisrtName}>change firstname</button>
            <h1>{data.lastName}</h1>
            <button onClick={changeLastName}>change firstname</button>
            <h1>{data.age}</h1>
        </div>
    )
}

export default Index;