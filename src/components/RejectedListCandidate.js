import React from 'react';
import MainDrawer from './partials/MainDrawer';
import {connect} from 'react-redux';
import ShortRejectList from './shared/ShortRejectList';

class RejectedListCandidates extends React.Component {
render (){
  const {classes, rejected} = this.props;
  return (
    <MainDrawer>
        <ShortRejectList candiArr ={rejected} status ={"rejected"}/>
    </MainDrawer>
  );
}
}
const mapStateToProps =(state)=>{
    return {
        rejected : state.ReducerData.rejected,
    }
}
export default connect(mapStateToProps)(RejectedListCandidates);