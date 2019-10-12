import React, {Component, Fragment} from 'react';
import {Card, CardBody, CardFooter, CardImg, CardText, CardTitle, Col, Row} from "reactstrap";
import {CardHeader} from "@material-ui/core";

class LostItem extends Component {
  render() {
    const{title, image, des, date, category, city} =this.props;

    return (
      <Fragment>
        <Card className="lost-item">
          <Row>
            <Col xs="3" sm="4">
              <CardHeader>
                <CardImg src={image} alt='image post'/>
              </CardHeader>
            </Col>
            <Col xs="9" sm="8">
              <CardBody>
                <CardTitle className="item-title">{title}</CardTitle>

                <CardText>{des}</CardText>
              </CardBody>
              <CardFooter className="item-attribute">
                <span>
                  <i className="tim-icons icon-compass-05" />
                  {city}
                </span>
                <span>|</span>
                <span>
                  <i className="tim-icons icon-app" />
                  {category}
                </span>
                <span>|</span>
                <span>
                  <i className="tim-icons icon-time-alarm" />
                  {date}
                </span>
              </CardFooter>
            </Col>
          </Row>
        </Card>
      </Fragment>
    );
  }
}

export default LostItem;