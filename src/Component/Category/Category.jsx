import React, {Component, Fragment} from 'react';
import {Button, ButtonGroup, Label} from "reactstrap";
import classNames from "classnames";
import * as actions from '../../actions/index';
import {connect} from 'react-redux';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "stuff",
    }
  }

  componentDidMount() {
    // this.props.actionFetchCategory()
  }

  onSelectCategory = name => {
    const {category} = this.state;
    this.setState({
      category: name
    });
    console.log(category);
    this.props.onCategory(category);
  };

  render() {
    return (
      <Fragment>
        <Label for="inputState">Category</Label>
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
              active: this.state.category === "stuff"
            })}
            onClick={() => this.onSelectCategory("stuff")}
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
              active: this.state.category === "pet"
            })}
            onClick={() => this.onSelectCategory("pet")}
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
              active: this.state.category === "person"
            })}
            onClick={() => this.onSelectCategory("person")}
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
      </Fragment>
    );
  }
}

const mapStateToProp = (state, ownProp) => {
  return {}
};

const mapDispatchToProp = (dispatch) => {
  return {
    // actionFetchCategory : ()=>{
    //   dispatch(actions.actionFetchCategory())
    // }
    onCategory: (category) => dispatch(actions.onCategory(category))
  }
};

export default connect(mapStateToProp, mapDispatchToProp)(Category);