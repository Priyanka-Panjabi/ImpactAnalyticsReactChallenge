import React from 'react';
import MainDrawer from './partials/MainDrawer';
import {connect} from 'react-redux';
import ShortRejectList from './shared/ShortRejectList';
class ShortListedCandidates extends React.Component {
render (){
  const {classes, shortlisted} = this.props;
  return (
    <MainDrawer>
        <ShortRejectList candiArr ={shortlisted} status ={"shortlisted"}/>
    </MainDrawer>
  );
}
}
const mapStateToProps =(state)=>{
    return {
        shortlisted : state.ReducerData.shortlisted,
    }
}
export default connect(mapStateToProps)(ShortListedCandidates);