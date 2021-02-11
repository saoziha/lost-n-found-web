import React, { Fragment } from 'react';
// nodejs library that concatenates classes
// import classNames from 'classnames';
// react plugin used to create charts
// reactstrap components
import { Alert, Card, CardHeader, Col, FormGroup, Label, Row } from 'reactstrap';
import LostTable from '../Component/Table/LostTable';
import ListCity from '../Component/ListCity/ListCity';
import Category from '../Component/Category/Category';

import Search from '../Component/Search/Search';

// core components

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    return (
      <Fragment>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card>
                <CardHeader>
                  <Col className="text-left d-flex" xs="12" sm="12">
                    {/*Lost Section*/}
                    <Col lg="6" xs="6" md="6">
                      <Alert color="info" className="text-center font-weight-bold">
                        <h5 className="card-categosry font-weight-bold">Total Lost</h5>
                        <i className="tim-icons icon-light-3 icon-section" /> 865
                      </Alert>
                    </Col>

                    {/*Found Section*/}
                    <Col lg="6" xs="6" md="6">
                      <Alert color="success" className="text-center font-weight-bold">
                        <h5 className="card-categosry font-weight-bold">Total Found</h5>
                        <i className="tim-icons icon-check-2 icon-section" /> 562
                      </Alert>
                    </Col>
                  </Col>

                  {/*Search Component*/}
                  <Col className="text-left" xs="12" sm="12">
                    <div className="form-row">
                      <Search />
                    </div>
                  </Col>

                  <Col className="text-left" xs="12" sm="12">
                    <div className="form-row">
                      <FormGroup className="col-md-12">
                        <Category />
                      </FormGroup>
                    </div>
                  </Col>

                  {/*Select Option City*/}
                  <Col className="text-left" xs="12" sm="12">
                    <div className="form-row">
                      <FormGroup className="col-md-12">
                        <Label for="inputState">City</Label>
                        <ListCity />
                      </FormGroup>
                    </div>
                  </Col>
                </CardHeader>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="12" md="12" className="wrapped-lost">
              <LostTable />
              {/* <Detail /> */}
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
