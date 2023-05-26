import { Route, Routes } from 'react-router-dom';
import { Contacts } from 'Pages/Contacts/Contacts';
import Home from '../Pages/Home/Home';

import Login from '../Pages/Login/Login';
import Register from 'Pages/Register/Register';
import Layout from '../components/AppBar/Layout';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} path="/goit-react-hw-08-phonebook" />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}
