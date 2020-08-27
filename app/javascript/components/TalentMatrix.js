import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from "prop-types";
import { GRID_STRUCTURE } from "../constants.js";


const bgColor = {
  header: {
    backgroundColor: 'rgb(34, 39, 139)', //'#22278b',
    color: 'white',
    justifyContent: 'center',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    border: 'solid 1px black'
  },
  body: {
    backgroundColor: 'rgb(146, 150, 228)', //'#9296e4'
    color: 'white',
    border: 'solid 1px black',
    height: 80
  }
}

class TalentMatrix extends React.Component {
    // var ButtonToolbar = ReactBootstrap.ButtonToolbar;

    // console.log('dummyData!: ', dummyData);

  render () {
    return (
        <>
          <Container fluid>
          {
            GRID_STRUCTURE.map(row => {
              return (
                <Row>
                  {
                    row.map(cell => {
                      return (
                        <Col xs key={cell.id} style={bgColor[cell.type]}>
                          {cell.label}
                        </Col>
                      )
                    })
                  }
                </Row>
              )
            })
          }
        </Container>
        </>
    );
  }
}

TalentMatrix.propTypes = {
  greeting: PropTypes.string
};
export default TalentMatrix
