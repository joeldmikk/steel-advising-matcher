import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import {FLOURISHING_GRID} from '../../constants';

const bgColor = {
  header: {
    backgroundColor: 'rgb(34, 39, 139)', //'###22278',
    color: 'white'
  },
  body: {
    backgroundColor: 'rgb(146, 150, 228)', //'#bffff2'
    color: 'white'
  }
}

export const FlourishingMatrix = () => {
  return(
    <Container>
      {
        FLOURISHING_GRID.map(row => {
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
