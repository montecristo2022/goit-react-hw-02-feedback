
import Counter from "componentsCreatedByMe/Counter";
import Dropdown from "componentsCreatedByMe/Dropdown";
import Feedback from "componentsCreatedByMe/Feedback";
import React, { Component } from "react";
import ReactDOM from "react-dom";


export const App = () => {



  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >


      
      {/* <Counter initialValue={10} /> */}

{/* <Dropdown/> */}
   

      
      <Feedback initialValue={0}/>
      
    </div>

    
  );



};




