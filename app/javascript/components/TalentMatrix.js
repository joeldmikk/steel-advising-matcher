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

const INLINE_MATRIX_CELL_HEIGHT = 20;
const DISPLAY_MATRIX_CELL_HEIGHT = 100;
const FORM_MATRIX_CELL_HEIGHT = 100;


class TalentMatrix extends React.Component {
  constructor(props) {
    console.log('constructor!');
    super(props);
    this.state = {
      selected: this.props.selected &&  this.props.selected.split(',') || [],
      contents: this.props.contents,
      grid: this.props.grid || GRID_STRUCTURE,
    }
    this.handleClick = this.handleClick.bind(this);
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
      document.getElementById(this.props.talent_input_id).value=[nextSelected]
    }
  }

  // TODO move this
  bgColor = (cell) => {
    switch(this.props.mode) {
      case 'inline': {
        switch(cell.type) {
          case 'header': {
            return styles[cell.category][cell.type].backgroundColor;
          }
          case 'body': {
            return this.state.selected.includes(cell.id) ? 'LawnGreen' : 'rgb(235, 235, 235)'
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
                      return (
                        <Col
                          key={`${context}-${cell.id}`}
                          style={{
                            border: 'solid 1px black',
                            height: renderProps.cellHeight,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: this.bgColor(cell),
                            flexBasis: 0,
                          }}
                          onClick={() => { this.handleClick(cell.id) }}
                        >
                          <MatrixCell
                            key={`${context}-${cell.id}-matrix-cell`}
                            mode={mode}
                            selected={selected.includes(cell.id)}
                            context={this.props.context}
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
  selected: PropTypes.string
};
export default TalentMatrix
