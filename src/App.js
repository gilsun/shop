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
import Detail from "./Detail";
import axios from "axios";
import LoaidngUi from "./LoadingUi";
import Cart from "./Cart";

function App() {
  let [food, food변경] = useState(data);
  let [loading, setLoading] = useState(true);
  let [재고, 재고변경] = useState([10, 11, 12]);

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
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail/0">
                Detail
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Cart
              </Nav.Link>
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
            Upscale grocery delivery free delivery on order + $100 (in the SF
            Bay area){" "}
          </p>
          <Button variant="primary">Lean more</Button>{" "}
        </div>
        <div className="container">
          <div className="row">
            {food.map((item, i) => {
              return <Product item={item} key={i} />;
            })}
          </div>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => {
            {
              loading && <LoaidngUi />;
            }

            axios
              .get("https://shop-1350a-default-rtdb.firebaseio.com/shop.json")
              .then((result) => {
                setLoading(false);
                console.log(result.data);
                food변경([...food, ...result.data]);
              })
              .catch(() => {
                console.log("실패했어요");
              });
          }}
        >
          더보기
        </button>
      </Route>
      <Route path="/detail/:id">
        <Detail food={food} 재고={재고} 재고변경={재고변경} />
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>
    </div>
  );
}

export default App;
