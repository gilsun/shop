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

function App() {
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
          <div className="col-md-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0364/1976/4363/products/1_e45a2ba8-3a75-4ce6-b976-66dc5c94b97b.jpg?v=1635976726"
              alt="angus meat"
              width="100%"
            />
            <h4>[앵거스 정육점] 조개탕 2인분</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div className="col-md-4">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/0364/1976/4363/products/KakaoTalk_Photo_2021-09-29-23-08-51003.jpg?v=1632982524"
              alt="angus meat"
              width="100%"
            />
            <h4>청태김 100매 300g</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div className="col-md-4">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/0364/1976/4363/products/43c99f1bba1f2705198d5bf04f67ba65.jpg?v=1602796092"
              alt="angus meat"
              width="100%"
            />
            <h4>단감 10lb</h4>
            <p>상품설명 & 가격</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
