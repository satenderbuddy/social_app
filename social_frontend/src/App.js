import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './home/Header';
// import Sidebar from './home/Sidebar';
import Home from './home/Home';
import Profile from './home/Profile';
import Messages from './home/Messages';
import Notifications from './home/Notifications';
import Settings from './home/Settings';
import Login from './home/Login'
import SignUp from './home/SignUp'
import Welcome from './home/Welcome';

function App() {
  const isLoggedIn = localStorage.getItem("UserToken")
  return (
    <Router>
      <div className='App'>
        <Header  isLoggedIn={isLoggedIn} />
        <Container>
          <Row>
            {/* <Col md={3}>
              <Sidebar />
            </Col> */}
            <Col md={9}>
              <Routes>
                {isLoggedIn?(
                <Route path="/" element={<Home />} />
              ):
              <Route path="/" element={<Welcome />} />
              }
                <Route path="/profile" element={<Profile />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
