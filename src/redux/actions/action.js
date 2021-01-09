import axios from 'axios';
import * as types from './types';

export const getCandidateData=()=>{
    let url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json' ;
    return async function (dispatch){
        const response = await axios.get(url);
        dispatch({
            type: 'GET_CANDIDATE_DATA',
            payload : response.data
        })
    }
}
export const setShortListedCandidate = (data)=>{
    return {
        type: types.SHORTLISTED_CANDIDATE,
        payload: data
    }
}
export const setRejectedCandidates = ( data)=>{
    return {
        type: types.REJECTED_CANDIDATE,
        payload : data
    }
}