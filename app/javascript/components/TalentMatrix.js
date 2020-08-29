import React, { useState } from "react"
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
};

// const props = {
//   mode: ['display', 'form', 'inline'],
//   selected: [],
//   talent_input_id: '', // only used in form mode
//   contents: {"CELL_ID": ["Client 1", "Client 2"]}
// }

const INLINE_MATRIX_CELL_HEIGHT = 20;
const DISPLAY_MATRIX_CELL_HEIGHT = 100;
const FORM_MATRIX_CELL_HEIGHT = 100;
// const 

class TalentMatrix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: JSON.parse(this.props.selected) || [],
      contents: {},
    }
    this.handleClick = this.handleClick.bind(this);
  }

  populateGridContents = () => {
    if (this.props.content) {
      return GRID_STRUCTURE.map((cell) => {
        const nextCell = Object.assign({}, cell);
        console.log("nextCell: ", nextCell);
        this.props.content[nextCell.id]
        nextCell.content = this.props.content[nextCell.id]
        return nextCell;
      })
    }
    return GRID_STRUCTURE;
  }

  handleClick(val) {
    if (this.props.mode === 'form') {
      let nextSelected = this.state.selected;
      if (nextSelected.includes(val)) {
        var index = nextSelected.indexOf(val);
        nextSelected.splice(index, 1);
      } else {
        nextSelected = [...nextSelected, val];
      }
      this.setState({selected: nextSelected})
      const jsonNextSelected = JSON.stringify(nextSelected);
      document.getElementById(this.props.talent_input_id).value=jsonNextSelected
    }
  }

  getRenderProps() {
    switch(this.props.mode) {
      case 'display':
        return ({
          cellHeight: DISPLAY_MATRIX_CELL_HEIGHT,
        })
      case 'form':
        return ({
          cellHeight: FORM_MATRIX_CELL_HEIGHT,
        })
      case 'inline':
        return ({
          cellHeight: INLINE_MATRIX_CELL_HEIGHT,
        })
      default:
        return {};
    }
  }

  render () {
    const { selected } = this.state;
    const { mode, context } = this.props
    const renderProps = this.getRenderProps();
    console.log('this.props: ', this.props);
    console.log('this.state: ', this.state);
    console.log('renderProps: ', renderProps);
    return (
        <>
          <Container>
          {
            this.populateGridContents().map(row => {
              return (
                <Row
                  key={`${context}-${row[0].id}`}
                >
                  {
                    row.map(cell => {
                      // if (selected.includes(cell.id)) {
                      //   cell.selected = true;
                      // }

                      // TODO move this
                      const bgColor = () => {
                        switch(mode) {
                          case 'inline': {
                            switch(cell.type) {
                              case 'header': {
                                return styles[cell.category][cell.type].backgroundColor;
                              }
                              case 'body': {
                                return selected.includes(cell.id) ? 'LawnGreen' : 'rgb(235, 235, 235)'
                              }
                            }
                          }
                          case 'display': {
                            return styles[cell.category][cell.type].backgroundColor;
                          }
                          case 'form': {
                            return styles[cell.category][cell.type].backgroundColor;
                          }
                          default: {
                            return null;
                          }

                        }
                      }
                      return (
                        <Col
                          key={`${context}-${cell.id}`}
                          style={{
                            border: 'solid 1px black',
                            height: renderProps.cellHeight,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // alignContent: 'stretch',
                            backgroundColor: bgColor()
                          }}
                          onClick={() => { this.handleClick(cell.id) }}
                        >
                          <MatrixCell
                            key={`${context}-${cell.id}-matrix-cell`}
                            mode={mode}
                            selected={selected.includes(cell.id)}
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




  // render () {
  //   console.log('this.props: ', this.props)
  //   return (
  //       <>
  //         <Container fluid>
  //         {
  //           GRID_STRUCTURE.map(row => {
  //             return (
  //               <Row
  //                 key={row[0].id}
  //               >
  //                 {
  //                   row.map(cell => {
  //                     return (
  //                       <Col xs
  //                         key={cell.id}
  //                         style={{
  //                           // color: 'white',
  //                           border: 'solid 1px black',
  //                           height: 100,
  //                           display: 'flex',
  //                           alignItems: 'center',
  //                           justifyContent: 'center',
  //                           ...styles[cell.category][cell.type]
  //                         }}
  //                         onClick={() => { console.log('clicked: ', cell.id)}}
  //                       >
  //                         <MatrixCell
  //                           key={cell.id}
  //                         >
  //                           {cell}
  //                         </MatrixCell>
  //                       </Col>
  //                     )
  //                   })
  //                 }
  //               </Row>
  //             )
  //           })
  //         }
  //       </Container>
  //       </>
  //   );
  // }

TalentMatrix.propTypes = {
  greeting: PropTypes.string
};
export default TalentMatrix
