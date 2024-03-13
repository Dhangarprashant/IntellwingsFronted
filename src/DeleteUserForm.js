import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#71c55d',
    },
  },
});


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const DeleteUserForm = () => {
  
  const navigate = useNavigate();

    const backend_url = `https://intellwingsbackend.onrender.com`
  

  const [user,setUser] = useState({id:""});

  let name ,value;
  const handleInputs = (event) => {
    name=event.target.name;
    value=event.target.value;
    setUser({...user,[name]:value});
  }

  const DeleteData = async (event) =>  {
    event.preventDefault();

    const {id} = user;

    const  res = await fetch(`${backend_url}/deleteUser`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        id:id
      })
    });

    if(res.status === 422)
    {
      window.alert("please enetr the detail correctly")
    }
    else{
      window.alert("delete user successfull");
      console.log(res.status);
      console.log("successfull");
      navigate("/contactInformation");
    }
  }



  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Delete User
          </Typography>
          <Box component="form" noValidate onSubmit={DeleteData} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <CssTextField 
                  required
                  fullWidth
                  label="ID"
                  id="id"
                  autoComplete="off"
                  name="id"
                  value={user.id}
                  onChange={handleInputs}
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor:"rgb(34,193,195)",
                background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,126,253,1) 100%)"
              }}
            >
                Delete User
            </Button>
          </Box>
        </Box>
        <Box 
            sx={{  mb: 2 }}
          style={{
            paddingBottom:"6px" , 
            paddingTop:"6px"
            ,borderRadius:"6px",
            backgroundColor:"rgb(34,193,195)",
            background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,126,253,1) 100%)"
          }}
        >
            <NavLink class="" to="/updateUser"  style={{textDecoration:"none",margin:"10px auto"}} >Update User Data</NavLink>

        </Box>
        <Box 
          sx={{  mb: 2 }}
          style={{
            paddingBottom:"6px" , 
            paddingTop:"6px"
            ,borderRadius:"6px",
            backgroundColor:"rgb(34,193,195)",
            background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,126,253,1) 100%)"
          }}
        >
            <NavLink class="" to="/addUser"  style={{textDecoration:"none",margin:"10px auto"}} >Add User Delete</NavLink>

        </Box>
        <Box 
          style={{
            paddingBottom:"6px" , 
            paddingTop:"6px"
            ,borderRadius:"6px",
            backgroundColor:"rgb(34,193,195)",
            background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,126,253,1) 100%)"
          }}
        >
            <NavLink class="" to="/contactInformation"  style={{textDecoration:"none",margin:"10px auto"}} >View User Data</NavLink>

        </Box>
        
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default DeleteUserForm;