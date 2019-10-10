import React, {Component} from 'react';
import {Card, CardBody, CardHeader, CardTitle, Table} from "reactstrap";
import {connect} from 'react-redux';
class LostTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    const {selectCity} = this.props;
    console.log(selectCity);
    return (
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Missing Table</CardTitle>
        </CardHeader>
        <CardBody>
          <Table className="tablesorter"
                 responsive>
            <thead className="text-primary">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>City</th>
              <th>Item Missing</th>
              <th>Type</th>
              <th>Time</th>

            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Dakota Rice</td>
              <td>descript here</td>
              <td>Wallet</td>
              <td>Pet</td>
              <td >$36,738</td>
              <td>asdawd</td>
            </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProp = (state)=>{
  return{
    selectCity : state.selectCity
  }
};
export default connect(mapStateToProp, null)(LostTable);