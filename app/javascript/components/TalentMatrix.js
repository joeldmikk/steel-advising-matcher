import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from "prop-types";
import { GRID_STRUCTURE } from "../constants.js";
import { MatrixCell } from './talentMatrix/MatrixCell';

const styles = {
  'PSYCHOLOGY': {
    header: {
      backgroundColor: 'rgb(0, 191, 154)',
    },
    body: {
      backgroundColor: 'rgb(191, 255, 242)',
    },
  },
  'EDUCATION': {
    header: {
      backgroundColor: 'rgb(34, 39, 139)',
    },
    body: {
      backgroundColor: 'rgb(146, 150, 228)',
    },
  },
  'FLOURISHING': {
    header: {
      backgroundColor: 'rgb(34, 39, 139)',
    },
    body: {
      backgroundColor: 'rgb(146, 150, 228)',
    },
  },
  'LEADERSHIP': {
    header: {
      backgroundColor: 'rgb(255, 147, 30)',
    },
    body: {
      backgroundColor: 'rgb(254, 233, 210)',
    },
  }
}

class TalentMatrix extends React.Component {

  render () {
    return (
        <>
          <Container fluid>
          {
            GRID_STRUCTURE.map(row => {
              return (
                <Row
                  key={row[0].id}
                >
                  {
                    row.map(cell => {
                      return (
                        <Col xs
                          key={cell.id}
                          style={{
                            // color: 'white',
                            border: 'solid 1px black',
                            height: 100,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles[cell.category][cell.type]
                          }}
                          onClick={() => {console.log('clicked: ', cell.id)}}
                        >
                          <MatrixCell
                            key={cell.id}
                          >
                            {cell}
                          </MatrixCell>
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
