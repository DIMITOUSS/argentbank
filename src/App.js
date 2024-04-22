import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';
import Login from './pages/Login';
import UserAccount from './pages/UserAccount';
import Error404 from './components/Error404/Error404';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/account" element={<UserAccount />} /> {/* Wrap PrivateRoute with Route */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
