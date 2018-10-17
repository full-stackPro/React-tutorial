
import React, {
  Component,
  PropTypes
} from 'react';

class AddSchool extends Component {
    constructor(props, context) {
      super(props, context)
      this.addSchool = this.addSchool.bind(this)
      this.handleInputChange = this.handleInputChange.bind(this)

      this.state = {
        name:'',
        tagline:''
      }
    }

    addSchool(e){
        e.preventDefault();
        this.props.actions.addSchool(this.state);
    }

    handleInputChange(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    }

    render(){

        return(

            <form className="form" onSubmit={this.addSchool}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">School Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="School Name" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">Tagline:</label>
                    <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.address} onChange={this.handleInputChange} placeholder="Tagline" />
                </div>
                <div className="form-group">
                    <button className="btn" type="submit" >Add School</button>
                </div>
            </form>
        )
    }
}

AddSchool.defaultProps = {
  schools: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default AddSchool;
