import React, { Fragment } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react plugin used to create charts
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardTitle,
  Col,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row
} from 'reactstrap';
import LostTable from '../Component/Table/LostTable';
import callAPI from '../utils/apiCaller';
import ListCity from '../Component/ListCity/ListCity';

// core components

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: 'data1',
      sltCity: 0,
      city_list: []
    };
  }

  componentDidMount() {
    // callAPI("citys", "GET", null)
    //   .then(res => {
    //     this.setState({
    //       city_list: res.data
    //     })
    //   });
  }

  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };

  onHandleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
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
                    <Col className="text-left" xs="12" sm="12">
                      <h5 className="card-category">Need Title Here?</h5>
                      <CardTitle tag="h2">What is the Title?</CardTitle>
                    </Col>

                    <Col className="text-left" xs="12" sm="12">
                      <div className="form-row">
                        <FormGroup className="col-md-12">
                          <Label for="inputState">Search</Label>
                          <Input type="text" name="keyword" id="inputState" placeholder="Enter keyword..." />
                          <Button size="small" className="btn-search">
                            <span className="tim-icons icon-zoom-split"></span>
                          </Button>
                        </FormGroup>
                      </div>
                    </Col>

                    <Col className="text-left" xs="12" sm="12">
                      <div className="form-row">
                        <FormGroup className="col-md-12">
                          <ButtonGroup className="btn-group-toggle float-right btn-category" data-toggle="buttons">
                            <Button
                              color="info"
                              id="2"
                              size="sm"
                              tag="label"
                              className={classNames('btn-simple', {
                                active: this.state.bigChartData === 'data1'
                              })}
                              onClick={() => this.setBgChartData('data1')}>
                              <input className="d-none" name="options" type="radio" />
                              <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">Stuff</span>
                              <span className="d-block d-sm-none">
                                <i className="tim-icons icon-mobile" />
                              </span>
                            </Button>
                            <Button
                              color="warning"
                              id="1"
                              size="sm"
                              tag="label"
                              className={classNames('btn-simple', {
                                active: this.state.bigChartData === 'data2'
                              })}
                              onClick={() => this.setBgChartData('data2')}>
                              <input className="d-none" name="options" type="radio" />
                              <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">Pets</span>
                              <span className="d-block d-sm-none">
                                <i className="tim-icons icon-heart-2" />
                              </span>
                            </Button>

                            <Button
                              tag="label"
                              color="danger"
                              id="0"
                              size="sm"
                              className={classNames('btn-simple', {
                                active: this.state.bigChartData === 'data3'
                              })}
                              onClick={() => this.setBgChartData('data3')}>
                              <input defaultChecked className="d-none" name="options" type="radio" />
                              <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">Persons</span>
                              <span className="d-block d-sm-none">
                                <i className="tim-icons icon-single-02" />
                              </span>
                            </Button>
                          </ButtonGroup>
                        </FormGroup>
                      </div>
                    </Col>

                    {/*select option city*/}
                    <Col className="text-left" xs="12" sm="12">
                      <div className="form-row">
                        <FormGroup className="col-md-12">
                          <Label for="inputState">City</Label>
                          <ListCity />
                          {/*<Input type="select"*/}
                          {/*name="sltCity"*/}
                          {/*id="inputState"*/}
                          {/*value={this.state.sltCity}*/}
                          {/*onChange={this.onHandleChange}*/}
                          {/*>*/}
                          {/*<option className='slt-option' value={0}>Da Nang</option>*/}
                          {/*<option className='slt-option' value={1}>Ho Chi Minh</option>*/}
                          {/*<option className='slt-option' value={2}>Ha Noi</option>*/}
                          {/*<option className='slt-option' value={3}>Hai Phong</option>*/}
                          {/*</Input>*/}
                        </FormGroup>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
              </Card>
            </Col>
          </Row>
          {/*<Row>*/}
          {/*<Col xs="12"*/}
          {/*lg="12"*/}
          {/*className="wrapped-button">*/}

          {/*/!*Button Lost*!/*/}

          {/*<Col lg="6">*/}
          {/*<Button*/}
          {/*tag="label"*/}
          {/*className={classNames("btn-simple", {*/}
          {/*active: this.state.bigChartData === "data1"*/}
          {/*})}*/}
          {/*color="info"*/}
          {/*id="0"*/}
          {/*size="md"*/}
          {/*onClick={() => this.setBgChartData("data1")}*/}
          {/*>*/}
          {/*<input*/}
          {/*defaultChecked*/}
          {/*className="d-none"*/}
          {/*name="options"*/}
          {/*type="radio"*/}
          {/*/>*/}
          {/*<span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">*/}
          {/*<h5 className="card-categosry">Total Lost</h5>*/}
          {/*<CardTitle tag="h3">*/}
          {/*<i className="tim-icons icon-spaceship text-info"/>{" "}*/}
          {/*26.354*/}
          {/*</CardTitle>*/}
          {/*</span>*/}
          {/*<span className="d-block d-sm-none">*/}
          {/*<i className="tim-icons icon-single-02"/>*/}
          {/*</span>*/}
          {/*</Button>*/}
          {/*</Col>*/}

          {/*/!*Button Found*!/*/}
          {/*<Col lg="6">*/}
          {/*<Button*/}
          {/*color="info"*/}
          {/*id="1"*/}
          {/*size="md"*/}
          {/*tag="label"*/}
          {/*className={classNames("btn-simple", {*/}
          {/*active: this.state.bigChartData === "data2"*/}
          {/*})}*/}
          {/*onClick={() => this.setBgChartData("data2")}*/}
          {/*>*/}
          {/*<input*/}
          {/*className="d-none"*/}
          {/*name="options"*/}
          {/*type="radio"*/}
          {/*/>*/}
          {/*<span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">*/}

          {/*<h5 className="card-category">Total Found</h5>*/}
          {/*<CardTitle tag="h3">*/}
          {/*<i className="tim-icons icon-zoom-split text-primary"/>{" "}*/}
          {/*25.431*/}
          {/*</CardTitle>*/}
          {/*</span>*/}
          {/*<span className="d-block d-sm-none">*/}
          {/*<i className="tim-icons icon-gift-2"/>*/}
          {/*</span>*/}
          {/*</Button>*/}
          {/*</Col>*/}
          {/*</Col>*/}
          {/*</Row>*/}
          <Row>
            <Col lg="12" md="12">
              <LostTable />
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
