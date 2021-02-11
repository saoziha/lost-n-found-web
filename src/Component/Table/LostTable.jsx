import React, { Component } from 'react';
import './LostTable.css';
import { connect } from 'react-redux';
import LostItem from './LostItem';
import * as actions from '../../actions/index';

class LostTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.actionFetchLostList();
  }

  listItem = listLost => {
    let result = null;
    if (listLost.length > 0) {
      result = listLost.map(data_lost => {
        console.log(data_lost);
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

  render() {
    let { filterLost, lostList } = this.props;

    let items = [...lostList.dataItem];

    //search lost follow city
    if (filterLost.id_city) {
      items = items.filter(lost => {
        let filterCity = lost.lost_city.toLowerCase().indexOf(filterLost.id_city.toLowerCase());
        return filterCity !== -1;
      });
    }

    //search lost follow category
    if (filterLost.category) {
      items = items.filter(lost => {
        let filterCategory = lost.lost_category.toLowerCase().indexOf(filterLost.category.toLowerCase());
        return filterCategory !== -1;
      });
    }

    //search lost follow keyword
    if (filterLost.keyword) {
      items = items.filter(lost => {
        let keywordTitle = lost.lost_title.toLowerCase().indexOf(filterLost.keyword.toLowerCase());
        let keywordDes = lost.lost_description.toLowerCase().indexOf(filterLost.keyword.toLowerCase());
        return keywordTitle !== -1 || keywordDes !== -1;
      });
    }

    return <div>{this.listItem(items)}</div>;
  }
}

const mapStateToProp = state => {
  return {
    // cityList: state.cityList,
    filterLost: state.filterLost,
    lostList: state.lostList,
    clickCategory: state.clickCategory
  };
};

const mapDispatchToProp = dispatch => {
  return {
    actionFetchLostList: () => {
      dispatch(actions.actionFetchLostList());
    }
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(LostTable);
