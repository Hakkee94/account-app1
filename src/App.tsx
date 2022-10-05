import React from "react";
import "./App.css";
import Auth from "./features/auth/Auth";
import Contacts from './features/contacts/Contacts'
import {
    Routes,
    Route,
} from "react-router-dom";
import PrivateRoute from './components/private-route'

function App() {

  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Auth/>} />
              <Route path="contacts" element={<PrivateRoute><Contacts/></PrivateRoute>}/>
          </Routes>
      </div>
  );
}

export default App;
