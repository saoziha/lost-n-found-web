import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col, CardImg, CardFooter, CardHeader } from 'reactstrap';
import './Detail.css';

export default class componentName extends Component {
  render() {
    return (
      <div>
        <Card className="lost-item">
          <Row>
            <Col>
              <CardHeader>
                <CardTitle className="item-title">Help! I lost my son</CardTitle>
              </CardHeader>
              <CardBody>
                <CardImg src="http://localhost:3000/assets/img/anime3.png" />
                <CardText>
                  Lorem ipsum dolor sit amet, aenean sed at sit sed at, arcu aenean placerat vivamus enim, fusce integer
                  praesent auctor justo nam, vitae suspendisse parturient, mauris qui suspendisse erat erat aenean.
                  Tempor suspendisse elit cras est vestibulum vestibulum, placerat felis in lacus vel nonummy donec,
                  sapien lacinia nec arcu lectus elit interdum, et habitant sed tellus, ut iaculis velit pede
                  consectetuer neque lacinia. Nec cras sed, ac et purus ullamcorper at suscipit orci, non lacus
                  ultricies quas quis id, mauris aenean ullamcorper lobortis. Lectus sagittis donec consectetuer eros.
                </CardText>
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
      </div>
    );
  }
}
