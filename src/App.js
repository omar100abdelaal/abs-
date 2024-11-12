import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import {HomePage} from "./pages/HomePage"
import {Page2} from "./pages/page2"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/page2" 
            element={
              <ProtectedRoute>
                <Page2 />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;