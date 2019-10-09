import React, {Fragment} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
// reactstrap components
import {Button, Card, CardHeader, CardTitle, Col, FormGroup, Input, Label, Row} from "reactstrap";
import LostTable from "../Component/Table/LostTable";

// core components

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      sltCity: 0
    };
  }

  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };

  onHandleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Fragment>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left"
                         xs="12"
                         md="8"
                         lg="8"
                         sm="8">
                      <h5 className="card-category">
                        What do you need?
                      </h5>
                      <CardTitle tag="h2">Latest News</CardTitle>
                    </Col>
                    <Col className="text-left"
                         xs="12"
                         sm="4"
                         md="4"
                         lg="4"
                    >
                      <div className="form-row">
                        <FormGroup className="col-md-12">
                          <Label for="inputState">City</Label>
                          <Input type="select"
                                 name="sltCity"
                                 id="inputState"
                                 value={this.state.sltCity}
                                 onChange={this.onHandleChange}
                          >
                            <option value={0}>Da Nang</option>
                            <option value={1}>Ho Chi Minh</option>
                            <option value={2}>Ha Noi</option>
                            <option value={3}>Hai Phong</option>
                          </Input>
                        </FormGroup>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12"
                 lg="12"
                 className="wrapped-button">

              {/*Button Lost*/}

              <Col lg="6">
                <Button
                  tag="label"
                  className={classNames("btn-simple", {
                    active: this.state.bigChartData === "data1"
                  })}
                  color="info"
                  id="0"
                  size="md"
                  onClick={() => this.setBgChartData("data1")}
                >
                  <input
                    defaultChecked
                    className="d-none"
                    name="options"
                    type="radio"
                  />
                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                <h5 className="card-categosry">Total Lost</h5>
                    <CardTitle tag="h3">
                      <i className="tim-icons icon-spaceship text-info"/>{" "}
                      26.354
                    </CardTitle>
                          </span>
                  <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02"/>
                          </span>
                </Button>
              </Col>

              {/*Button Found*/}
              <Col lg="6">
                <Button
                  color="info"
                  id="1"
                  size="md"
                  tag="label"
                  className={classNames("btn-simple", {
                    active: this.state.bigChartData === "data2"
                  })}
                  onClick={() => this.setBgChartData("data2")}
                >
                  <input
                    className="d-none"
                    name="options"
                    type="radio"
                  />
                  <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">

              <h5 className="card-category">Total Found</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-zoom-split text-primary"/>{" "}
                    25.431
                  </CardTitle>
                          </span>
                  <span className="d-block d-sm-none">
                            <i className="tim-icons icon-gift-2"/>
                          </span>
                </Button>
              </Col>
            </Col>

          </Row>


          <Row>
            <Col lg="12"
                 md="12">
              <LostTable/>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
