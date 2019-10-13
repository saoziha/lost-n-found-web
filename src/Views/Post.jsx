import React, { Component, Fragment } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date()
    };
  }

  handleDateChange = date => {
    this.setState({
      selectedDate: date
    });
  };

  render() {
    return (
      <Fragment>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5>Post Stuff</h5>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Title</label>
                        <Input required placeholder="Your Home Address" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>City</label>
                        <Input required placeholder="Your Home Address" type="select">
                          <option>Da Nang</option>
                          <option>Ho Chi Minh</option>
                          <option>Da Lat</option>
                          <option>Nha Trang</option>
                          <option>Ha Noi</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Description</label>
                        <Input type="textarea" name="txtArea" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <label>Status</label>
                      <FormGroup className="d-flex justify-content-around">
                        <div className="form-check-radio pl-md-4">
                          <Label className="form-check-label">
                            <Input
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios1"
                              value="sltLost"
                              defaultChecked
                            />
                            Lost
                            <span className="form-check-sign check-sign-lost"> </span>
                          </Label>
                        </div>
                        <div className="form-check-radio pl-md-4">
                          <Label className="form-check-label">
                            <Input type="radio" name="exampleRadios" id="exampleRadios2" value="sltFound" />
                            Found
                            <span className="form-check-sign check-sign-found"> </span>
                          </Label>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <label>Time</label>
                      <FormGroup>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <Grid container justify="space-around">
                            <KeyboardDatePicker
                              disableToolbar
                              variant="inline"
                              format="dd/MM/yyyy"
                              margin="normal"
                              id="date-picker-inline"
                              label="Date picker inline"
                              value={this.state.selectedDate}
                              onChange={this.handleDateChange}
                              KeyboardButtonProps={{
                                'aria-label': 'change date'
                              }}
                            />
                            <KeyboardTimePicker
                              margin="normal"
                              id="time-picker"
                              label="Time picker"
                              value={this.state.selectedDate}
                              onChange={this.handleDateChange}
                              KeyboardButtonProps={{
                                'aria-label': 'change time'
                              }}
                            />
                          </Grid>
                        </MuiPickersUtilsProvider>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="info" type="submit">
                    Post
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default Post;
