import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button, Row, Col, Image } from "react-bootstrap";
import './Home.css';

class Home extends Component {
    render() {
        return (
                <Grid>
                        <Jumbotron>
                            <h2>Bienvenidos a esta aplicacion de prueba de reactjs</h2>
                            <p>Aqui utilizaremos y aprenderemos el uso de react, bootstrap y react-router</p>
                            <Link to="/about">
                                <Button bsStyle="primary">Acerca</Button>
                            </Link>
                        </Jumbotron>
                        <Row className="show-grid text-center">
                            <Col xs={12} sm={4} className="pwerson-wrapper">
                                <Image src="assets/person-1.jpeg" circle className="profile-pic" ></Image>
                                <h3>Frank</h3>
                                <p>Este es frank el hombre es un durelio</p>
                            </Col>
                            <Col xs={12} sm={4} className="pwerson-wrapper">
                                <Image src="assets/person-2.jpeg" circle className="profile-pic" ></Image>
                                <h3>Lina</h3>
                                <p>Este es lina el hombre es un durelio</p>
                            </Col>
                            <Col xs={12} sm={4} className="pwerson-wrapper">
                                <Image src="assets/person-3.jpeg" circle className="profile-pic" ></Image>
                                <h3>Francisco</h3>
                                <p>Este es francisco el hombre es un durelio</p>
                            </Col>
                        </Row>
                </Grid> 
        );
    }
}

export default Home;