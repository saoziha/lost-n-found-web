import React, {Component} from 'react';
import {Button, ButtonGroup} from "reactstrap";
import classNames from "classnames";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state={
      bigChartData: "d1",
    }
  }

  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };

  onHandleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <ButtonGroup
        className="btn-group-toggle float-right btn-category"
        data-toggle="buttons"
      >
        {/*Category Stuff*/}
        <Button
          color="info"
          id="2"
          size="sm"
          tag="label"
          className={classNames("btn-simple", {
            active: this.state.bigChartData === "d1"
          })}
          onClick={() => this.setBgChartData("d1")}
        >
          <input
            className="d-none"
            name="options"
            type="radio"
          />
          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Stuffs
                          </span>
          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-app font-weight-bold"/>
                          </span>
        </Button>

        {/*Category Pet*/}
        <Button
          color="warning"
          id="1"
          size="sm"
          tag="label"
          className={classNames("btn-simple", {
            active: this.state.bigChartData === "d2"
          })}
          onClick={() => this.setBgChartData("d2")}
        >
          <input
            className="d-none"
            name="options"
            type="radio"
          />
          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Pets
                          </span>
          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-molecule-40 font-weight-bold"/>
                          </span>
        </Button>


        {/*Category Person*/}
        <Button
          tag="label"
          color="danger"
          id="0"
          size="sm"
          className={classNames("btn-simple ", {
            active: this.state.bigChartData === "d3"
          })}
          onClick={() => this.setBgChartData("d3")}
        >
          <input
            defaultChecked
            className="d-none"
            name="options"
            type="radio"
          />
          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Persons
                          </span>
          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02 font-weight-bold"/>
                          </span>
        </Button>
      </ButtonGroup>
    );
  }
}

export default Category;