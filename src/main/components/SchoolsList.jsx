
import React, {
  Component,
  PropTypes
} from 'react';

import AddSchool from './AddSchool.jsx';
import SchoolInfo from './SchoolInfo.jsx';

class SchoolsList extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render(){
      const {schools,actions} = this.props;
       return(
           <div className="row">
                <div className="col-md-6">
                    <AddSchool actions={actions} schools={schools} />
                </div>
                <div className="col-md-6">
                    {
                        schools.schools.map(function(s,index){
                            return(
                                <SchoolInfo {...actions} info={s} key={'school'+index} />
                            )
                        })
                    }
                </div>
           </div>
       )
   }
}


SchoolsList.defaultProps = {
  schools: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default SchoolsList;
