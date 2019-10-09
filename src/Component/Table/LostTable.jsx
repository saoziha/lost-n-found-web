import React, {Component} from 'react';
import {Card, CardBody, CardHeader, CardTitle, Table} from "reactstrap";
import axios from 'axios'
class LostTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listLost: [],
      isTable: true
    }
  }

  changeTable = ()=>{
    this.setState({
      isTable: !this.state.isTable
    })
  };
  // componentDidMount() {
  //   const url = 'http://192.168.0.128:8000/api/city';
  //   axios({
  //     url : url,
  //     method: "GET",
  //     body: null
  //   })
  //     // .then(result => result.json())
  //   // get data city
  //   //   .then(data => console.log(data.data.data_city[0].name_city))
  //     .then(data => console.log(data))
  //     .catch(error => console.log(error))
  // }

  render() {
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

export default LostTable;