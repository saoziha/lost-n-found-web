import React, {Component, Fragment} from 'react';
import {Badge, Card, CardBody, CardFooter, CardHeader, CardImg, CardText, CardTitle, Col} from "reactstrap";

class LostItem extends Component {

  filterCategory = (category) => {
    let result = null;
    switch (category) {
      case ("person"):
        return result = <Badge href="#"
                      color="danger"><i className="tim-icons icon-single-02 "/>{category}</Badge>
      case ("pet"):
        return result = <Badge href="#"
                      color="warning"><i className="tim-icons icon-molecule-40 "/>{category}</Badge>
      case ("stuff"):
        return result = <Badge href="#"
                      color="info"><i className="tim-icons icon-app "/>{category}</Badge>
      default: return result
    }
  };

  render() {
    const {title, image, des, date, category, city} = this.props;

    return (
      <Fragment>
        <Card className="card-wrapped">
          <Col xs="4"
               sm="4"
               className="text-left pl-0 pr-0">
            <CardImg src={image}
                     alt="image post"
                     className="pl-0 pr-0"/>

          </Col>
          <Col xs="8"
               sm="8">
            <Col xs="12"
                 sm="12"
                 className="pl-0 pr-0 card-content">
              <CardHeader className="pl-0 pr-0 pt-0">
                <CardTitle className="item-title text-capitalize">{title}</CardTitle>
              </CardHeader>
              <CardBody className="pl-0 pr-0">
                <CardText className="card-text-customize">{des}</CardText>
              </CardBody>
              <CardFooter className="item-attribute pl-0 pr-0">
                <Col sm="10" md='4'
                     className="pr-0 pl-0 text-left">
                       <span className="text-capitalize text-info card-footer-customize font-weight-bold">
                            <i className="tim-icons icon-square-pin"/>{city}
                        </span>
                </Col>
                <span style={{fontSize: "15px", position: "relative", top: '-2px'}}>|</span>
                <Col sm="1" md='4'
                     className="pl-1 pr-0 text-left">
                      <span className="card-footer-customize text-capitalize font-weight-bold">
                        {this.filterCategory(category)}
                      </span>
                </Col>
                <span style={{fontSize: "15px", position: "relative", top: '-2px'}}>|</span>
                <Col sm="1" md='4'
                     className="pl-1 pr-0 text-left">
                      <span className="card-footer-customize font-weight-bold">
                        <i className="tim-icons icon-calendar-60"/>{date}
                      </span>
                </Col>
              </CardFooter>
            </Col>
          </Col>
        </Card>
      </Fragment>
    );
  }
}

export default LostItem;