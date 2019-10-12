import React, {Component, Fragment} from 'react';
import {Input} from "reactstrap";
import {connect} from 'react-redux';
import * as actions from '../../actions/index';


class ListCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sltCity: "",
    }
  }

  onHandleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  onFilter = (city) => {
    const {sltCity} = this.state;
    // id = parseInt(sltCity, 10);
    city = sltCity;
    this.props.onFilter(city);
  };

  componentDidMount() {
    this.props.actionFetchDataCity()
  }


  render() {
    const {cityList} = this.props;
    const {sltCity} = this.state;
    return (
      <Fragment>
        <Input type="select"
               name="sltCity"
               id="inputState"
               value={sltCity}
               className="slt-option"
               onChange={this.onHandleChange}
               onClick={() => this.onFilter(sltCity)}
        >
          {this.sltCity(cityList)}
        </Input>
      </Fragment>
    );
  }

  sltCity(cityList) {
    let result = null;

    if (cityList !== "") {
      result = cityList.map(city => {
        return (
          <option key={city.city_id}
                  className="slt-option"
                  value={city.city_name}
          >
            {city.city_name}
          </option>
        )
      })
    }
    return result
  }
}

const mapStateToProp = (state) => {
  return {
    cityList: state.cityList,
  }
};

const mapDispatchToProp = (dispatch) => {
  return {
    actionFetchDataCity: () => {
      dispatch(actions.actionFetchDataCity());
    },
    onFilter: (filterValue) => {
      dispatch(actions.onFilter(filterValue));
    }
  }
};

export default connect(mapStateToProp, mapDispatchToProp)(ListCity);