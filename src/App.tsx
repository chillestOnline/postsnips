import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Feed from './Feed';

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">PostSnips</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/my-feed">My Feed</Nav.Link>
              <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/log-in">Log In</Nav.Link>
              <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <h1>Home Page</h1>
        </Route>
        <Route path="/my-feed">
          <Feed />
        </Route>
        <Route path="/profile">
          <h1>Profile Page</h1>
        </Route>
        <Route path="/log-in">
          <Login />
        </Route>
        <Route path="/sign-up">
          <Signup />
        </Route> {/* Added a closing tag for the Route component */}
      </Switch>
    </Router>
  );
}

export default App;
