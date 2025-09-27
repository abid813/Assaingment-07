import React from 'react';
import Navbar from "./components/Navbar";
import TicketDashboard from './components/TicketDashboard';

import Footer from "./components/Footer";

const App = () => {
  return (
    
    <div>
      <Navbar />
      <TicketDashboard/>
      <Footer />
    </div>
  );
};

export default App;