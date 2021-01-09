import React, { Component } from 'react';
import MainDrawer from './partials/MainDrawer' ;
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { Paper, Typography, IconButton, Button, Grid, Avatar, ListItemText , List} from '@material-ui/core';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ClearIcon from '@material-ui/icons/Clear';
import {setShortListedCandidate, setRejectedCandidates} from '../redux/actions/action';

const useStyles = ()=>({
    mainDiv :{
        display : 'flex',
        flexDirection : 'row',
    },
    imgDiv : {
        display :'flex',
        flexDirection :'row',
        width :'fit-content'
    },
    imgCss : {
        maxHeight :'50%'
    },
    detailDiv: {
        marginTop : '5%',
        marginLeft :'2%'
    },
    Avatar : {
        height:'96%',
        width :'62%'
    },
    TypographyPri : {
        marginLeft:'1%',
        fontSize:'45px'
    },
    TypographySec : {
        marginLeft:'1%',
        fontSize:'18px'
    }
});

export class CandidateDetails extends Component {
    state ={
        candidateVal : {},
        candInd : -1
    }
    componentDidMount () {
        let candidateId = window.location.hash.substring(2);
        let ind = this.props.candidates.findIndex(ele=>ele.id===candidateId);
        this.setState({candidateVal : this.props.candidates[ind], candInd: ind}) ;
    }
    acceptRejectCandidate = (val) =>{
        const {candidateVal, candInd} = this.state ;
        const {candidates, shortlisted, rejected} = this.props ;
        let obj = candidateVal ;
        let candiArr = [] ;
        switch (val){
            case 'accept' : {
                            candiArr = [...shortlisted] ;
                            candiArr.push(obj );
                            this.props.setShortListedCandidate(candiArr);}
                            break;
            default : {
                            candiArr = [...rejected] ;
                            candiArr.push(obj );
                            this.props.setRejectedCandidates(candiArr);} 
                            break ;
        }
        this.props.history.push('/');
    }
    render() {
        const { classes} =this.props ;
        const {candidateVal} = this.state ;
        return (
            <MainDrawer>
                <Grid container spacing ={2} style ={{margin:'3%', backgroundColor:'aliceblue'}}>
                    <Grid container item xs ={12} sm={12} md={3} lg ={3} >
                        <Grid item xs ={12} sm={12} md ={12} lg ={12}> 
                            <Avatar alt="image" src={candidateVal.Image} className={classes.Avatar} />
                        </Grid>
                        <Grid ititem xs ={12} sm={12} md ={12} lg ={12}>
                            <Typography className={classes.TypographyPri}>
                            {candidateVal.name}
                            </Typography>
                            <Typography className={classes.TypographySec}>
                            User Id -{candidateVal.id}
                            </Typography>
                            
                        </Grid>
                        <Grid item xs ={12} sm={12} md ={12} lg ={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{width:'98%', backgroundColor:'#48BB78'}}
                            endIcon={<DoneOutlineIcon>Accepted</DoneOutlineIcon>}
                            onClick = {()=>this.acceptRejectCandidate('accept')}
                        >
                            Accept
                        </Button>
                            
                        </Grid>
                        <Grid item xs ={12} sm={12} md ={12} lg ={12}>
                        <Button
                        variant="contained"
                        color="primary"
                        style={{width:'98%', marginTop:'2%', backgroundColor:'#E53E3E'}}
                        endIcon={<ClearIcon>Accepted</ClearIcon>}
                        onClick = {()=>this.acceptRejectCandidate('reject')}
                        >
                        Reject
                    </Button>
                            
                        </Grid>

                    </Grid>
                    <Grid container item xs ={12} sm={12} md={8} lg ={8}>
                        <Grid xs ={12} sm={12} md = {12} lg ={12}>
                           <List>
                               <ListItemText
                                primary= {"Years of Experience"}
                               secondary={
                                <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                   - 10   
                                </Typography>
                                </React.Fragment>}
                                />
                                <ListItemText
                                primary= {"Previous Company"}
                               secondary={
                                <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                   - XYZ Pvt. Ltd.
                                </Typography>
                                </React.Fragment>}
                                />
                                 <ListItemText
                                primary= {"Summary"}
                                secondary={
                                <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                   - Professional marketer manager with 5+ years of experience in digital marketing. Social media marketing experience, including Facebook, Google, and LinkedIn advertising. Experience in managing an account with a monthly budget of $30,000. B.A. in marketing management.
                                </Typography>
                                </React.Fragment>}
                                />
                           
                           </List>
                        </Grid>
                    </Grid>
                </Grid>



                {/* <div className = {classes.mainDiv}>
                    <div className ={classes.imgDiv} >
                        <div>
                            <img src={candidateVal.Image}  className ={classes.imgCss}/>
                        </div>
                        <div className = {classes.detailDiv}>
                            <Typography style={{fontSize : '38px'}}>
                                <b>{candidateVal.name}</b> 
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <Paper>
                        <Typography>
                            <b>About Candidate</b> 
                        </Typography>
                        </Paper>
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<DoneOutlineIcon>Accepted</DoneOutlineIcon>}
                            onClick = {()=>this.acceptRejectCandidate('accept')}
                        >
                            Accept
                        </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<ClearIcon>Accepted</ClearIcon>}
                        onClick = {()=>this.acceptRejectCandidate('reject')}
                    >
                        Reject
                    </Button>
                    </div>

                </div> */}
            </MainDrawer>
        )
    }
}
const mapStateToProps =(state)=>{
    return {
        candidates : state.ReducerData.candidates,
        shortlisted : state.ReducerData.shortlisted,
        rejected :  state.ReducerData.rejected
    }
}
export default connect(mapStateToProps,{setShortListedCandidate, setRejectedCandidates})(withStyles(useStyles)(CandidateDetails));
