import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col, CardImg, CardFooter } from 'reactstrap';
import axios from 'axios';
import callAPI from '../../utils/apiCaller';
import { CardHeader } from '@material-ui/core';
import './LostTable.css';
class LostTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listLost: [],
      isTable: true
    };
  }
  componentDidMount() {
    callAPI('/lost-items', 'GET', null).then(res => console.log(res.data));
  }
  changeTable = () => {
    this.setState({
      isTable: !this.state.isTable
    });
  };

  render() {
    return (
      <div>
        <Card className="lost-item">
          <Row>
            <Col xs="3" sm="4">
              <CardHeader>
                <CardImg src="../../assets/img/anime3.png" />
              </CardHeader>
            </Col>
            <Col xs="9" sm="8">
              <CardBody>
                <CardTitle className="item-title">Help! I lost my son</CardTitle>

                <CardText>Some quick example text to build on the card title.</CardText>
              </CardBody>
              <CardFooter className="item-attribute">
                <span>
                  <i className="tim-icons icon-compass-05" />
                  Da Nang
                </span>
                <span>|</span>
                <span>
                  <i className="tim-icons icon-app" />
                  Pet
                </span>
                <span>|</span>
                <span>
                  <i className="tim-icons icon-time-alarm" />
                  25-10-2019
                </span>
              </CardFooter>
            </Col>
          </Row>
        </Card>

        <Card className="lost-item">
          <Row>
            <Col xs="3" sm="4">
              <CardHeader>
                <CardImg src="../../assets/img/anime3.png" />
              </CardHeader>
            </Col>
            <Col xs="9" sm="8">
              <CardBody>
                <CardTitle className="item-title">Help! I lost my son</CardTitle>

                <CardText>Some quick example text to build on the card title.</CardText>
              </CardBody>
              <CardFooter className="item-attribute">
                <span>Da Nang</span>
                <span>|</span>
                <span>Pet</span>
                <span>|</span>
                <span>25-10-2019</span>
              </CardFooter>
            </Col>
          </Row>
        </Card>

        <Card className="lost-item">
          <Row>
            <Col xs="3" sm="4">
              <CardHeader>
                <CardImg src="../../assets/img/anime3.png" />
              </CardHeader>
            </Col>
            <Col xs="9" sm="8">
              <CardBody>
                <CardTitle className="item-title">Help! I lost my son</CardTitle>

                <CardText>Some quick example text to build on the card title.</CardText>
              </CardBody>
              <CardFooter className="item-attribute">
                <span>Da Nang</span>
                <span>|</span>
                <span>Pet</span>
                <span>|</span>
                <span>25-10-2019</span>
              </CardFooter>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default LostTable;
