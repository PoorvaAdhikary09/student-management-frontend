import React, { useState } from "react";
import { addStudent } from "../services/api";
import { TextField, Button, Box, Paper, Typography } from "@mui/material";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function AddStudent() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    age: "",
    grade: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(student);
    alert("Student added!");
    navigate("/");
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', width: '100%',paddingBottom: '20px' }}>
    <Navbar />
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'left',
        }}
        >
           <Button 
          // startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{ marginLeft : '40px', color: '#000',  }}
        >
          <ArrowBackIcon />
        </Button>
        </div>
         <Paper elevation={3} sx={{ p: 4, width: '50%',  }}>
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom
            sx={{ 
              textAlign: 'center',
              fontSize: '28px',
              fontWeight: 'bold',
              mb: 4
            }}
          >
            Add Student
          </Typography>
    <form onSubmit={handleSubmit}>
       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3,width: '100%' }}>
      <TextField
        label="Name"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
      />
      <TextField
        label="Age"
        type="number"
        value={student.age}
        onChange={(e) => setStudent({ ...student, age: e.target.value })}
      />
      <TextField
        label="Grade"
        value={student.grade}
        onChange={(e) => setStudent({ ...student, grade: e.target.value })}
      />
      <TextField
        label="Email"
        type="email"
        value={student.email}
        onChange={(e) => setStudent({ ...student, email: e.target.value })}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                       <Button 
        variant="contained" 
        color="primary" 
        type="submit"
        sx={{ 
          marginBottom: '20px', 
          fontSize: '12px',
          float: 'right',
          marginRight: '20px',
          backgroundColor: '#2162DC', 
          '&:hover': {
            backgroundColor: '#06307C', 
          },
        }}
      >
        Add
      </Button>
                    </Box>
                    </Box>
    </form>
    </Paper>
      </Box>
    </div>
  );
}