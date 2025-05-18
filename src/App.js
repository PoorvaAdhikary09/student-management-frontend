import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/add" element={<AddStudent />} />
         <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </Router>
  );
}

export default App;