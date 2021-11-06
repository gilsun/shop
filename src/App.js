/*eslint-disable*/
import "./App.css";
import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  FormControl,
  Form,
} from "react-bootstrap";
import data from "./data.js";
import { useState } from "react";
import Product from "./product.js";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [food, food변경] = useState(data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Ploma</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">food</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                other category
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Route exact path="/">
        <div className="jumbotron background">
          <h1>20% Season off </h1>
          <p>
            This is a simple hero unit, a simple jumbotron style component for
            calling extra attention to featured content or information{" "}
          </p>
          <Button variant="primary">Lean more</Button>{" "}
        </div>
        <div className="container">
          <div className="row">
            {data.map((item, i) => {
              return <Product item={item} key={i} />;
            })}
          </div>
        </div>
      </Route>
      <Route path="/detail">
        <div> 디테일 페이지예요</div>
      </Route>
    </div>
  );
}

export default App;
