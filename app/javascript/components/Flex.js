import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from 'react-bootstrap';

export class Flex extends React.Component {

    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
      }

  render () {
    return (
        <Container>
            {
                this.props.data &&
                this.props.data.map(row => {return <Row>{row}</Row>})
            }
        </Container>
    // <div style={styling.flex} flexDirection="row">{this.props.data &&
    //         this.props.data.map(row => {return <FlexRow>{row}</FlexRow>})
    //     }
    // </div>
    );
  }
}
Flex.propTypes = {
    data: PropTypes.arrayOf(Array)
};


export class FlexRow extends React.Component {
    constructor(props) {
        super(props);
      }
    render () {
        return (
            <Row>
            { this.props.children &&
                this.props.children.map(item => {return <Col>{item}</Col>})
            }
        </Row>
        )
    }
}

// export class FlexItem extends React.Component {
//     constructor(props) {
//         super(props);
//       }
//     render () {
//         return (
//             this.props.children
//         );
//     }
// }


