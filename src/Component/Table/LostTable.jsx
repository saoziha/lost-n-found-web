import React, {Component} from 'react';
import './LostTable.css';
import {connect} from 'react-redux';
import LostItem from "./LostItem";
import * as actions from '../../actions/index';

class LostTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: []
    }
  }



  componentDidMount() {
    this.props.actionFetchLostList();
  }



  listItem = (listLost) => {
    let result = null;
    if (listLost.length > 0) {
      result = listLost.map(data_lost => {
        return <LostItem
          key={data_lost.lost_id}
          title={data_lost.lost_title}
          image={data_lost.lost_image}
          des={data_lost.lost_description}
          city={data_lost.lost_city}
          date={data_lost.lost_date_at}
          category={data_lost.lost_category}
        />
      })
    }
    return result
  };

  render() {
    let {selectCity, lostList, clickCategory} = this.props;
    console.log(clickCategory);
    //search lost follow city

    console.log(lostList.dataItem);
    let items = lostList.dataItem;

    // if (selectCity.id_city !== "") {
    //   console.log(lostList.filter(data => data.lost_city))
    // }


    if (selectCity.id_city !== "") {
      items = items.filter(lost => {
          return lost.lost_city.toLowerCase().indexOf(selectCity.id_city.toLowerCase()) !== -1
        }
      );
    }

    //search lost follow category

    // if (!clickCategory ) {
    //   lostList = lostList.filter(lost => {
    //       return lost.lost_category.toLowerCase().indexOf(clickCategory.toLowerCase()) !== -1
    //     }
    //   );
    //   console.log(lostList.length);
    // }

    return (
      <div>
        {this.listItem(lostList.dataItem)}
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    // cityList: state.cityList,
    selectCity: state.selectCity,
    lostList: state.lostList,
    clickCategory: state.clickCategory
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    actionFetchLostList: () => {
      dispatch(actions.actionFetchLostList())
    }
  }
};

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(LostTable);
