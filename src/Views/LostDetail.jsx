import React, {Component, Fragment} from 'react';
import {Col, Row} from "reactstrap";

class LostDetail extends Component {
  render() {
    return (
      <Fragment>
        <div className="content">
          <Row>
            <Col md="12">
              Detail Lost
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default LostDetail;