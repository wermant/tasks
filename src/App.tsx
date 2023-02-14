import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";
import logo512 from "./logo512.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Tyler Werman - UD CISC275 with React Hooks and TypeScript
            </header>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                height: 300,
                                width: 200
                            }}
                        >
                            <h1 style={{ backgroundColor: "blue" }}>Header</h1>
                            <ul>
                                <li>item 1</li>
                                <li>item 2</li>
                                <li>item 3</li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                height: 500,
                                width: 600
                            }}
                        >
                            <img src={logo512} alt="logo picture" />
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            Hello World
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
