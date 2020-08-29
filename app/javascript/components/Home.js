import React from "react"
import PropTypes from "prop-types"
import { Container, Nav } from 'react-bootstrap'
import TalentMatrix from './TalentMatrix'

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Container>
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="overview">Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="client-view">Client View</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="consultant-view">Consultant View</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <TalentMatrix />
        </Container>
      </React.Fragment>
    );
  }
}

export default Home
