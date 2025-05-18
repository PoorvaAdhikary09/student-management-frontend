
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (  
<AppBar 
        position="static" 
        sx={{ 
          backgroundColor: '#D9D9D9', 
          marginBottom: '20px',
          color: '#000',
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student Management System
          </Typography>
        </Toolbar>
      </AppBar>
  );
}
