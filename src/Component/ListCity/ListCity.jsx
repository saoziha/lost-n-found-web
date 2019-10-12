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

  onSelectCity = (id) => {
    const {sltCity} = this.state;
    // id = parseInt(sltCity, 10);
    id = sltCity;
    this.props.onSelectCity(id);
  };

  componentDidMount() {
    this.props.actionFetchDataCity()
  }


  render() {
    const {cityList} = this.props;
    const {sltCity}= this.state;
    return (
      <Fragment>
        <Input type="select"
               name="sltCity"
               id="inputState"
               value={this.state.sltCity}
               selected
               onChange={this.onHandleChange}
               onClick={() => this.onSelectCity(sltCity)}
        >
          {this.sltCity(cityList)}
        </Input>
      </Fragment>
    );
  }

  sltCity(cityList) {
    let result = null;
    if (cityList.length > 0) {
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
    onSelectCity: (city_id) => {
      dispatch(actions.onSelectCity(city_id));
    }
  }
};

export default connect(mapStateToProp, mapDispatchToProp)(ListCity);