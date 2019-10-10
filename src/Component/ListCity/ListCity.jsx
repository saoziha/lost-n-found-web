import React, {Component, Fragment} from 'react';
import {Input} from "reactstrap";
import {connect} from 'react-redux';
import * as actions from '../../actions/index';


class ListCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sltCity: 1,
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
    id = parseInt(sltCity, 10);
    this.props.onSelectCity(id);
  };



  render() {
    const {cityList} = this.props;

    return (
      <Fragment>
        <Input type="select"
               name="sltCity"
               id="inputState"
               value={this.state.sltCity}
               onChange={this.onHandleChange}
               onClick={()=>this.onSelectCity(this.state.sltCity)}
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
          <option key={city.id}
                  className="slt-option"
                  value={city.id}

          >
            {city.name_city}
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
    onSelectCity: (data_city) => {
      dispatch(actions.onSelectCity(data_city));
    }
  }
};

export default connect(mapStateToProp, mapDispatchToProp)(ListCity);