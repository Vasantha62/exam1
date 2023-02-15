//import Child1 from "./components/Child1"
//import Child2 from "./components/Child2"
//import Childcls from "./components/Childcls"
//import Child3 from "./components/Child3"
//import Incre from "./components/Incre"
//import Logo from "./components/Logo"//
//import State from "./components/State"
//import ClassProps from "./components/ClassProps"
//import List from "./components/List"
//import Statecls from "./components/Statecls"
//import PropsChildren from "./components/PropChildren"
//mport A from "./components/A"
//import Lists from "./components/Lists"
//import Style1 from "./components/Style1"
//import Navbar from "./components/Navbar
//import Navbar from "./components/Navbar"
//import Navbar from "./components/Navbar"
//import useState1 from "./components/Usestate1"
//import Tcs from "./components/tcs.module.css"
//import "./global.css"
//import Style2 from "./components/Style2"
//import Style3 from "./components/Style3"
//import Inline from "./components/Inline"
//import Img from "./components/Img"

//import Main from "./Hooks/Main"//

//import Controlled from "./components/Controlled"
//import Amazon from "./components/Amazon"
//import Navbar from "./components/Navbar"
//import Tcs from "./components/Tcs"
//import Navbar from "./components/Navbar"
//import Zee5 from "./components/Zee5"
//import Navbar from "./components/Navbar"
//import Platform from "./components/Plaftform"
//import Godaddy from "./components/Godaddy"
//import Useeffect from "./Hooks/Useeffect"
//import X from "./Hooks/X"
//import {createContext} from "react"


//import Uncontrolled from "./components/Uncontrolled";
//import Xml from "./components/Xml"
 //export let userData=createContext()
 //import React, { useState } from "re
 import React, { useState, useEffect } from 'react';
 import UserDashboard from './UserDashboard';
 
 const App = () => {
   const [savedProperties, setSavedProperties] = useState([]);
   const [contactHistory, setContactHistory] = useState([]);
 
   useEffect(() => {
     // Fetch saved properties and set state
     // Fetch contact history and set state
   }, []);
 
   return (
     <div>
       <h1>My Real Estate App</h1>
       <UserDashboard savedProperties={savedProperties} contactHistory={contactHistory} />
     </div>
   );
 };
 
 export default App;