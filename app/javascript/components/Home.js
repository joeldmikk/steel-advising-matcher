import React from "react"
import PropTypes from "prop-types"
import { Container, Tabs, Tab } from 'react-bootstrap'
import TalentMatrix from './TalentMatrix'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {key: 'overview'}
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/overview")
      .then((response) => { return response.json()})
      .then((data) => {
        this.setState({overview: data})
      })
  }
  
  render () {
    console.log("Home.props: ", this.props);
    console.log("Home.state: ", this.state);
    return (
      <React.Fragment>
        <Container>
          <Tabs
            id="controlled-tab-example"
            activeKey={this.state.key}
            onSelect={(k) => this.setState({key: k})}
          >
            <Tab eventKey="overview" title="Overview">
              <TalentMatrix
                mode="display"
                context="overview"
                selected="[]"
                contents={this.state.overview}
              />
              OVERVIEW
            </Tab>
            <Tab eventKey="client-view" title="Client Overview">
              CLIENT OVERVIEW
            </Tab>
            <Tab eventKey="consultant-view" title="Consultant Overview">
              CONSULTANT OVERVIEW
            </Tab>
          </Tabs>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home
