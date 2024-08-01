import { useState } from "react";
import { Container, Accordion, Table, Button } from "react-bootstrap";
import Delevery from "./components/Delevery";

const SSS = () => {
  // State to determine which component to display
  const [view, setView] = useState(null);
  // State to track the active button
  const [activeButton, setActiveButton] = useState(null);

  // Function to handle button click
  const handleButtonClick = (viewType) => {
    setView(viewType);
    setActiveButton(viewType);
  };

  return (
    <>
      <Delevery />
      <Container>
        <Button
          onClick={() => handleButtonClick("accordion")}
          style={{
            backgroundColor: activeButton === "accordion" ? "black" : "",
            color: activeButton === "accordion" ? "white" : ""
          }}
        >
          Show Accordion
        </Button>
        <Button
          onClick={() => handleButtonClick("table")}
          style={{
            backgroundColor: activeButton === "table" ? "black" : "",
            color: activeButton === "table" ? "white" : ""
          }}
        >
          Show Table
        </Button>
        <Button
          onClick={() => {
            setView(null);
            setActiveButton(null);
          }}
          style={{
            backgroundColor: activeButton === null ? "black" : "",
            color: activeButton === null ? "white" : ""
          }}
        >
          Hide
        </Button>
        
        {view === "accordion" && (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Item #1</Accordion.Header>
              <Accordion.Body>
                This is the body of the first accordion item.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Item #2</Accordion.Header>
              <Accordion.Body>
                This is the body of the second accordion item.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}

        {view === "table" && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John</td>
                <td>Doe</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane</td>
                <td>Doe</td>
              </tr>
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
}

export default SSS;
