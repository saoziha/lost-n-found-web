import React, {Component, Fragment} from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, Input, Row} from "reactstrap";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }

  render() {
    return (
      <Fragment>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5> Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form >

                    {/*Username & Email*/}
                    <Row>
                      <Col className="pr-md-1"
                           md="6">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            defaultValue="Username"
                            placeholder="Username"
                            type="text"
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1"
                           md="6">
                        <FormGroup>
                          <label>Email Address</label>
                          <Input
                            defaultValue="email@gmail.com"
                            placeholder="Email address"
                            type="text"
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    {/*Infomation User*/}
                    <Row>
                      <Col className="pr-md-1"
                           md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            defaultValue="First Name"
                            placeholder="First Name"
                            type="text"
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1"
                           md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue="Last Name"
                            placeholder="Last Name"
                            type="text"
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    {/*Address*/}
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            placeholder="Your Home Address"
                            type="text"
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    {/*City & Zipcode*/}
                    <Row>
                      <Col className="pr-md-1"
                           md="6">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            placeholder="Your City"
                            type="text"
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1"
                           md="6">
                        <FormGroup>
                          <label>Phone Number</label>
                          <Input
                            placeholder="Your Phone Number"
                            type="number"
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill"
                          color="info"
                          type="submit">
                    Save
                  </Button>
                </CardFooter>
              </Card>


            </Col>
            <Col md="4">
              Avatar & User Profile Initital
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default UserProfile;