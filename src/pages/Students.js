import React, { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../services/api";
import { Table, Button, Typography, AppBar, Toolbar, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import Navbar from "../components/navbar";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    alert("Student Details deleted!");
    fetchStudents(); // Refresh list
  };

  return (
    <div>
      <Navbar/>
      <Typography variant="h4"
       sx={{ 
          fontWeight: 'bold', 
          marginBottom: '20px',
          textAlign: 'center'
        }}
      >Students List</Typography>
      <div
      style={{
        display: 'flex',
        justifyContent: 'right',
        marginRight: '20px',
      }}
      >
      <Button 
        variant="contained" 
        color="primary" 
        component={Link} 
        to="/add"
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
        Add Student
      </Button>
      </div>
       <div 
       style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          
        }}
       >
       <TableContainer
        component={Paper} 
        sx={{ 
          border: '1px solid #e0e0e0', // Visible borders
          boxShadow: 3,
         
        }}>
      <Table>
        <TableHead>
            <TableRow sx={{ backgroundColor: '#98B4E9' }}> {/* Light violet */}
              <TableCell sx={{ fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center' }}>ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center' }}>Age</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center' }}>Grade</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center' }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center',width:'150px' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
            {students.map((student, index) => (
              <TableRow 
                key={student.student_id}
                sx={{ 
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f5f5f5' // Alternate colors
                }}
              >
                <TableCell sx={{ border: '1px solid #e0e0e0',textAlign: 'center' }}>{student.student_id}</TableCell>
                <TableCell sx={{ border: '1px solid #e0e0e0',textAlign: 'center' }}>{student.name}</TableCell>
                <TableCell sx={{ border: '1px solid #e0e0e0',textAlign: 'center' }}>{student.age}</TableCell>
                <TableCell sx={{ border: '1px solid #e0e0e0',textAlign: 'center' }}>{student.grade}</TableCell>
                <TableCell sx={{ border: '1px solid #e0e0e0',textAlign: 'center' }}>{student.email}</TableCell>
                <TableCell sx={{ border: '1px solid #e0e0e0',textAlign: 'center' }}>
                  <Button 
                    component={Link} 
                    to={`/edit/${student.student_id}`}
                    sx={{ marginRight: '5px',width:'10px' }}
                  >
                    <EditDocumentIcon/>
                  </Button>
                  <Button 
                    onClick={() => handleDelete(student.student_id)}
                    color="error"
                    sx={{ 
                      marginLeft: '5px',
                      width:'10px'
                    }}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table>
      </TableContainer>
      </div>
    </div>
  );
}