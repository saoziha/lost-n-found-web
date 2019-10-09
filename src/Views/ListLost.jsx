import React, {Component, Fragment} from 'react';
import {Col, Row} from "reactstrap";

class ListLost extends Component {
  render() {
    return (
      <Fragment>
        <div className="content">
          <Row>
            <Col md="12">
              List Lost
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default ListLost;