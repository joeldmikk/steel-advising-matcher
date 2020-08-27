import React from "react"
import PropTypes from "prop-types"
import { Container } from 'react-bootstrap'
import TalentMatrix from './TalentMatrix'

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Container>
          <TalentMatrix />
        </Container>
      </React.Fragment>
    );
  }
}

export default Home
