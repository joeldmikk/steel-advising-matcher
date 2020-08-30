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


class TalentMatrix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: JSON.parse(this.props.selected) || [],
      contents: this.props.contents,
      grid: GRID_STRUCTURE,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.contents != prevProps.contents) {
      this.populateGridContents();
    }
  }

  populateGridContents = () => {
    const {contents} = this.props;
    const {selected} = this.state;
    if(!contents) {
      return;
    }
    const nextGrid = Object.assign([], GRID_STRUCTURE)
    nextGrid.forEach((row) => {
      row.forEach((cell) => {
        if (contents[cell.id]) {
          cell.contents = contents[cell.id] || undefined;
        }
        if (selected.includes(cell.id)) {
          cell.selected = true
        }
      })
    })
    this.setState({grid: nextGrid});
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
    const { selected, grid } = this.state;
    const { mode, context } = this.props
    const renderProps = this.getRenderProps();
    return (
        <>
          <Container>
          {
            grid.map(row => {
              return (
                <Row
                  key={`${context}-${row[0].id}`}
                >
                  {
                    row.map(cell => {

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
                            backgroundColor: bgColor(),
                            flexBasis: 0,
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
