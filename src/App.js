import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Pranamya Vadlamani',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Projects', path: '/projects' },
        { title: 'Experience', path: '/experience'},
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'About Me'
      },
      projects: {
        title: 'Technical Projects',
        subTitle: 'Projects the make a difference',
        text: 'Checkout my projects below'
      },
      experience: {
        title: 'Work Experience'
      },
      contact: {
        title: 'Let\'s Connect'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Pranamya Vadlamani</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/experience">Work Experience</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} />} />
          <Route path="/projects" exact render={() => <ProjectsPage title={this.state.projects.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/experience" render={() => <ExperiencePage title={this.state.experience.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;