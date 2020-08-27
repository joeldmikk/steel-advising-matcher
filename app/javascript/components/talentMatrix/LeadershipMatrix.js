import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import {LEADERSHIP_GRID} from '../../constants';

const bgColor = {
  header: {
    backgroundColor: 'rgb(0, 191, 154)' //'#00bf9a',
  },
  body: {
    backgroundColor: 'rgb(191, 255, 242)' //'#bffff2'
  }
}

export const LeadershipMatrix = () => {
  console.log("LEADERSHIP_GRID: ", LEADERSHIP_GRID);
  return(
    <Container>
      {
        LEADERSHIP_GRID.map(row => {
          return (
            <Row>
              {
                row.map(cell => {
                  return (
                    <Col xs key={cell.id} style={bgColor[cell.type]}>{cell.label}</Col>
                  )
                })
              }
            </Row>
          )
        })
      }
    </Container>
  )
}
