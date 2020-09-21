import React from "react"
import PropTypes from "prop-types"
import { Container, Tabs, Tab } from 'react-bootstrap'
import { GRID_STRUCTURE } from "../constants.js";
import TalentMatrix from './TalentMatrix'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'overview',
      overview: this.props.overview,
      clientsOverview: this.props.clientsOverview,
      consultantsOverview: this.props.consultantsOverview,
      overviewGrid: this.populateGridContents(this.props.overview),
      clientsGrid: this.populateGridContents(this.props.clientsOverview),
      consultantsGrid: this.populateGridContents(this.props.consultantsOverview),
    }
  }

  populateGridContents = (contents) => {
    if(!contents) {
      return;
    }
    const nextGrid = Object.assign([], GRID_STRUCTURE)
    nextGrid.forEach((row) => {
      row.forEach((cell) => {
        if (contents[cell.id]) {
          cell.contents = contents[cell.id] || undefined;
        }
      })
    })
    return nextGrid;
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
                selected=""
                contents={this.state.overview}
                grid={this.state.overviewGrid}
              />
            </Tab>
            <Tab eventKey="client-view" title="Client Overview">
              <TalentMatrix
                mode="display"
                context="clients-overview"
                selected=""
                contents={this.state.clientsOverview}
                grid={this.state.clientsGrid}
              />
            </Tab>
            <Tab eventKey="consultant-view" title="Consultant Overview">
              <TalentMatrix
                mode="display"
                context="consultants-overview"
                selected=""
                contents={this.state.consultantsOverview}
                grid={this.state.consultantsGrid}
              />
            </Tab>
          </Tabs>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home
