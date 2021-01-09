import * as types from '../actions/types';
const inititalState = {
    candidates : [],
    shortlisted : [],
    rejected : []
}
const setCandidateData=(state, action)=>{
    return {
        ...state,
        candidates :  action.payload 
    }
}
const setShortListedCandidates = (state,action) =>{
    return {
        ...state,
        shortlisted : action.payload
    }
}
const rejectedCandidates = (state,action) =>{
    return {
        ...state,
        rejected : action.payload
    }
}
const reducerData = (state=inititalState,action)=>{
    switch(action.type){
        case types.GET_CANDIDATE_DATA : return setCandidateData ( state,action);
        case types.SHORTLISTED_CANDIDATE : return setShortListedCandidates( state, action);
        case types.REJECTED_CANDIDATE : return rejectedCandidates( state, action);

        default : return state ;
    }
}

export default reducerData ;