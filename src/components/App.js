import React, { Component } from 'react';
import {Route, HashRouter, Switch} from 'react-router-dom';
import CandidateDetails from './CandidateDetails';
import HomePage from './HomePage';
import ShortListedCandidates from './ShortListedCandidates';
import RejectedListCandidates from './RejectedListCandidate';

export class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path ="/" component={HomePage} />
                    <Route exact path ="/shortlisted" component = {ShortListedCandidates}/>       
                    <Route exact path ="/rejected" component ={RejectedListCandidates}/>              
                    <Route exact path ="/:id" component ={CandidateDetails}/>   
                </Switch>  
            </HashRouter>
        )
    }
}

export default App

