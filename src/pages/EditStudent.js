import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStudent, getStudentData, updateStudent } from "../services/api";
import { TextField, Button, Container, Box, Paper, Typography } from "@mui/material";
import Navbar from "../components/navbar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState([]);

  // Load student data
  useEffect(() => {
    fetchStudent();
  }, [id]);

  const fetchStudent = async () => {
    const data = await getStudentData(id);
    setStudent(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateStudent(id, student);
      alert("Student details updated!");
      navigate("/");
    } catch (error) {
      console.error("Error updating student:", error);
    }
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
            Update Details
          </Typography>
          
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3,width: '100%' }}>
              <Typography variant="h6"
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: '14px',
                  mb: 2,
                  textAlign: 'left'
                }}>
                Name :
                <TextField
                fullWidth
                variant="outlined"
                value={student.name}
                onChange={(e) => setStudent({...student, name: e.target.value})}
              />
              </Typography>
              
              <Typography variant="h6"
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: '14px',
                  mb: 2,
                  textAlign: 'left'
                }}>
                Age :
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                value={student.age}
                onChange={(e) => setStudent({...student, age: e.target.value})}
              />
              </Typography>

              <Typography variant="h6"
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: '14px',
                  mb: 2,
                  textAlign: 'left'
                }}>
                Grade :
              <TextField
                fullWidth
                variant="outlined"
                value={student.grade}
                onChange={(e) => setStudent({...student, grade: e.target.value})}
              />
              </Typography>

              <Typography variant="h6"
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: '14px',
                  mb: 2,
                  textAlign: 'left'
                }}>
                Email :
              <TextField
                fullWidth
                type="email"
                variant="outlined"
                value={student.email}
                onChange={(e) => setStudent({...student, email: e.target.value})}
              />
              </Typography>
              
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
        Save Update
      </Button>
              </Box>
            </Box>
          </form>
        </Paper>
      </Box>
    </div>
  );
}