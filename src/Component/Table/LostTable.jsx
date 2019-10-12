import React, { Component } from 'react';
import './LostTable.css';
import { connect } from 'react-redux';
import LostItem from './LostItem';
import * as actions from '../../actions/index';

class LostTable extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     listData: []
  //   };
  // }
  // componentDidMount() {
  //   callAPI('/lost-items', 'GET', null).then(res => {
  //     this.setState({
  //       listData: res.data
  //     });
  //   });
  // }

  // render() {
  //   const { listData } = this.state;
  //   let listLost;
  //   if (listData.length > 0) {
  //     listLost = listData.map(data_lost => {
  //       return (
  //         <div>
  //           <Col xs="3" sm="4" key={data_lost.id}>
  //             <CardHeader>
  //               {/* <CardImg src="../../assets/img/anime3.png" /> */}
  //               {data_lost.title}
  //             </CardHeader>
  //           </Col>
  //         </div>
  //       );
  //     });
  //     console.log('asdasda');
  //   } else {
  //     console.log('empty data');
  //   }

  //   return (
  //     <div>
  //       <Card className="lost-item">
  //         <Row>
  //           {listLost}
  //           {/* <Col xs="3" sm="4">
  //             <CardHeader>
  //               <CardImg src="../../assets/img/anime3.png" />
  //             </CardHeader>
  //           </Col>
  //           <Col xs="9" sm="8">
  //             <CardBody>
  //               <CardTitle className="item-title">Help! I lost my son</CardTitle>

  //               <CardText>Some quick example text to build on the card title.</CardText>
  //             </CardBody>
  //             <CardFooter className="item-attribute">
  //               <span>
  //                 <i className="tim-icons icon-compass-05" />
  //                 Da Nang
  //               </span>
  //               <span>|</span>
  //               <span>
  //                 <i className="tim-icons icon-app" />
  //                 Pet
  //               </span>
  //               <span>|</span>
  //               <span>
  //                 <i className="tim-icons icon-time-alarm" />
  //                 25-10-2019
  //               </span>
  //             </CardFooter>
  //           </Col> */}
  //         </Row>
  //       </Card>
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actionFetchLostList();
  }

  listItem = listLost => {
    let result = null;
    if (listLost.length > 0) {
      result = listLost.map(data_lost => {
        return (
          <LostItem
            key={data_lost.lost_id}
            title={data_lost.lost_title}
            image={data_lost.lost_image}
            des={data_lost.lost_description}
            city={data_lost.lost_city}
            date={data_lost.lost_date_at}
            category={data_lost.lost_category}
          />
        );
      });
    }
    return result;
  };

  // search lost list by select city
  onSearchCity = (selectCity, listLost) => {};

  render() {
    let { selectCity, lostList } = this.props;

    //search lost follow city
    if (selectCity !== '') {
      lostList = lostList.filter(lost => {
        return lost.lost_city.toLowerCase().indexOf(selectCity.id_city.toLowerCase()) !== -1;
      });
      console.log(lostList.length);
    }

    return <div>{this.listItem(lostList)}</div>;
  }
}

const mapStateToProp = state => {
  return {
    // cityList: state.cityList,
    selectCity: state.selectCity,
    lostList: state.lostList
  };
};

const mapDispatchToProp = dispatch => {
  return {
    actionFetchLostList: () => {
      dispatch(actions.actionFetchLostList());
    }
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(LostTable);
