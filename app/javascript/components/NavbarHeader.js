import React from "react"
import PropTypes from "prop-types"
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
class NavbarHeader extends React.Component {

  render () {
    console.log("props: ", this.props);
    const { current_user } = this.props;
    return (
      <React.Fragment>
        <Navbar variant="dark" style={{backgroundColor: 'rgb(34, 39, 139)'}}>
          <Navbar.Brand href="#home">Steel Advising Talent Matrix</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="clients">Clients</Nav.Link>
            <Nav.Link href="consultants">Consultants</Nav.Link>
          </Nav>

          

            <Form inline>
              {
                this.props.current_user &&
                <Navbar.Text>
                  Signed in as: <a href="#login">{current_user.name}</a>
                </Navbar.Text> ||
                <Button variant="outline-light">Search</Button>
              }
          </Form>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavbarHeader
