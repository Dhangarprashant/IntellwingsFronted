import React from 'react'
import { NavLink } from 'react-router-dom';



const HomePage = () => {
  return (
    <div style={{width:"100%",height:"80vh",backgroundColor:"rgb(255, 204, 215)",borderRadius:"10px"}}>
        <div style={{width:"100%",height:"20vh",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"3rem",fontWeight:"900",marginTop:"10vh"}}>
            Welcome to User Database
        </div>
        <div 
            style={{
                width:"80vw",
                height:"40vh",
                display: "flex",
                justifyContent: "center",
                alignItems:"center",
                marginLeft:"0",

            }}
        >
            
                <div 
                    style={{
                        color:"black",
                        backgroundColor:"rgb(255, 178, 107)",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        fontSize:"1.2rem",
                        width:"200px",
                        height:"50px",
                        borderTopLeftRadius:"5px",
                        borderBottomLeftRadius:"5px"
                    }}
                >
                    <NavLink class="" to="/contactInformation" style={{textDecoration:"none"}}>Contact Information </NavLink>
                </div>
                <div
                    style={{
                        color:"black",
                        backgroundColor:"rgb(235, 133, 255)",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        fontSize:"1.2rem",
                        width:"200px",
                        height:"50px",
                        borderTopRightRadius:"5px",
                        borderBottomRightRadius:"5px"
                    }}
                >
                    <NavLink class="" to="/addUser"  style={{textDecoration:"none"}}>Add User</NavLink>
                </div>
            
        </div>
    </div>

    
  )
}

export default HomePage;
