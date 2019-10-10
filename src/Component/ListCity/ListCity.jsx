import React, {Component, Fragment} from 'react';
import {Input} from "reactstrap";
import {connect} from 'react-redux';

class ListCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city_list: []
    }
  }

  render() {
    const {cityList} = this.props;
    console.log(cityList);
    return (
      <Fragment>
        <Input type="select"
               name="sltCity"
               id="inputState"
               value={this.state.sltCity}
               onChange={this.onHandleChange}
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
                  value={city.id}>
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
    cityList: state.cityList
  }
};

export default connect(mapStateToProp, null)(ListCity);