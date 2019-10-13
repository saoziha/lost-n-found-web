import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {connect} from 'react-redux';
import * as actions from '../../actions'


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }


  onHandleChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  onSubmitKey = (e) => {
    e.preventDefault()
    this.props.onKeyword(this.state.keyword);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmitKey} className='w-100'>
        <FormGroup className="col-md-12"
                   >
          <Label for="inputState">Search</Label>
          <Input type="text"
                 name="keyword"
                 id="inputState"
                 placeholder="Enter keyword..."
                 value={this.state.keyword}
                 onChange={this.onHandleChange}
          />
          <Button
            type="submit"
            size="small"
            className="btn-search"
          >
            <span className="tim-icons icon-zoom-split">
              <i> </i>
            </span>
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    onKeyword: (keyword) => {
      dispatch(actions.onKeyword(keyword))
    }
  }
};
export default connect(null, mapDispatchToProp)(Search);