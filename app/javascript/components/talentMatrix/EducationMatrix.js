import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import {EDUCATION_GRID} from '../../constants';

const bgColor = {
  header: {
    backgroundColor: 'rgb(34, 39, 139)', //'#22278b',
    color: 'white',
  },
  body: {
    backgroundColor: 'rgb(146, 150, 228)', //'#9296e4'
    color: 'white'
  }
}

export const EducationMatrix = () => {
  console.log("EDUCATION_GRID: ", EDUCATION_GRID);
  return(
    <Container>
      {
        EDUCATION_GRID.map(row => {
          return (
            <Row key={row[0].id}>
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
