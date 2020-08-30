import React from "react"
import PropTypes from "prop-types"
import { Container, Tabs, Tab } from 'react-bootstrap'
import TalentMatrix from './TalentMatrix'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {key: 'overview', overview: {}, clientsOverview: {}, consultantsOverview: {}}
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/overview")
      .then((response) => { return response.json()})
      .then((data) => {
        this.setState({overview: data});
      })
    fetch("http://localhost:3000/clients_overview")
      .then((response) => { return response.json()})
      .then((data) => {
        console.log("clientsOverview: ", data);
        this.setState({clientsOverivew: data});
      })
    fetch("http://localhost:3000/consultants_overview")
      .then((response) => {return response.json()})
      .then((data) => {
        console.log("consultantsOverview: ", data);
        this.setState({consultantsOverview: data});
      })
  }
  
  render () {
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
              <TalentMatrix
                mode="display"
                context="overview"
                selected="[]"
                contents={this.state.clientsOverview}
              />
            </Tab>
            <Tab eventKey="consultant-view" title="Consultant Overview">
              <TalentMatrix
                mode="display"
                context="overview"
                selected="[]"
                contents={this.state.consultantsOverview}
              />
            </Tab>
          </Tabs>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home
