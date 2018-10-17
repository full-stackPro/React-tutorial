import React, {
  Component,
  PropTypes
} from 'react';



class SchoolInfo extends Component {
  constructor(props, context) {
    super(props, context)
    this.delete = this.delete.bind(this);
  }
  delete(e){
        e.preventDefault();
        this.props.deleteSchool(this.props.info);
    }

    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.delete}>&times;</span>
                </div>
                <div className="panel-body">{this.props.info.tagline}</div>
            </div>
        )
    }
}

SchoolInfo.defaultProps = {
  deleteSchool: PropTypes.func.isRequired
};

export default SchoolInfo;
