import { BrowserRouter, Routes, Route } from "react-router-dom";
import DynamicPage from "./components/DynamicPage";

function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route index element={<DynamicPage />} />
            <Route
          path="staff"
          element={
            <DynamicPage title="staff"   />
          }
        /> 
            <Route
          path="service"
          element={
            <DynamicPage title="service"   />
          }
        /> 
            <Route
          path="date"
          element={
            <DynamicPage title="dateAndTime"   />
          }
        /> 
            <Route
          path="confirmation"
          element={
            <DynamicPage title="confirmation"   />
          }
        /> 


        </Routes>
      </BrowserRouter>
    );
  }


  export default App