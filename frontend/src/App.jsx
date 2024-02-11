import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../src/components/footer/Footer';
import ContributePage from '../src/pages/contributepage/ContributePage';
import Homepage from './pages/homepage/Homepage';
import AboutPage from './pages/aboutpage/AboutPage';
import DashBoard from './pages/adminpages/dashboard/DashBoard';
import AddPostPage from "./pages/adminpages/addpost-page/AddPostPage";
import ManagePostPage from './pages/adminpages/managepost-page/ManagePostPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <p className="header" >TabooTales</p>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contribute" element={<ContributePage />} />
          <Route path='/adminLogin' element={<DashBoard />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/addpost" element={<AddPostPage />} />
          <Route path="/managepost" element={<ManagePostPage />} />
          <Route path="/Logout" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
      </Router>
  );
}

export default App;