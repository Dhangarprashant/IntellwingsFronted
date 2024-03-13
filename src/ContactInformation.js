import { useState } from "react";
import "./App.css";
import DataTable from "./Table";
import { Button, TextField, Box } from "@mui/material";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function ContactInformation() {

  const backend_url = `https://intellwingsbackend.onrender.com`;

  const fetchData = () => {
    fetch(`${backend_url}/list`)
      .then(response => {
        return response.json()
      })
      .then(data => {

        const userInformation = data.user;
        setAllFilteredContacts(userInformation);
        console.log(userInformation);
        
      })
  }
  useEffect(() => {
    fetchData()
  }, []);

  
  
  const [searchQuery, setSearchQuery] = useState("");
  const [allFilteredContacts, setAllFilteredContacts] = useState({});

  const handleFilterAllContacts = (event) => {
    event?.preventDefault();
    const filteredContacts = allFilteredContacts.filter(
      (row) =>
        
        row.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (row.countryCode === Number(searchQuery))
    );
    console.log(filteredContacts);
    setAllFilteredContacts(filteredContacts);
  };

 
  


  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop:"20px"
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
            width: "100%",
            alignItems: "center",
            padding: "0.5rem 1rem",
          }}
        >
          Contact Management
          
      <div
           style={{
              color:"black",
              backgroundColor:"rgb(235, 133, 255)",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              fontSize:"1.2rem",
              width:"200px",
              height: "2.5rem",
              maxHeight: "2.5rem",
              borderRadius:"10px"
            }}
                >
                    <NavLink class="" to="/addUser"  style={{textDecoration:"none"}}>Add User</NavLink>
        </div>
          <Box
            sx={{ display: "flex",gap:"1rem", alignItems: "center",marginTop:"20px" }}
          >
            <form onSubmit={(event) => handleFilterAllContacts(event)}>
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    fontSize: "0.9rem",
                    background: "whitesmoke",
                    height: "2.5rem",
                    maxHeight: "2.5rem",
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                  },
                }}
                value={searchQuery}
                onChange={(event) => setSearchQuery(event?.target?.value)}
                placeholder="Search contacts"
              />
              <Button
                style={{
                  border: "1px solid lightgreen",
                  color: "lightgreen",
                  padding: "0.2rem 1rem",
                  height: "2.5rem",
                  maxHeight: "2.5rem",
                  marginLeft:"0.5rem"
                }}
                type="submit"
              >
                Filter
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
      
      <DataTable allFilteredContacts={allFilteredContacts} />
    </>
  );
}

export default ContactInformation;
