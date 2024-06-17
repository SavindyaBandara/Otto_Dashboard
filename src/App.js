import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Profile from './pages/Profile.jsx';
import Analytics from './pages/Analytics.jsx';
import ProductList from './pages/ProductList.jsx';
import Settings from './pages/Settings.jsx';
import AddVehicleForm from './pages/AddVehicleForm.jsx';
import AddLicenceForm from './pages/AddLicenceForm.jsx';
import Logout from './pages/Logout.jsx';
import AddServiceDetails from './pages/AddServiceDetails.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addvehicle" element={<AddVehicleForm />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path = "/add-license" element ={<AddLicenceForm/>}/>
          <Route path="/settings" element={<Settings />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/add-service/:carId" component={AddServiceDetails} />
        <Route path="/edit-service/:carId" component={AddServiceDetails} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;