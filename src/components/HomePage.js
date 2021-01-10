import React, { Component } from 'react'
import MainDrawer from './partials/MainDrawer';
import {getCandidateData} from '../redux/actions/action';
import {connect } from 'react-redux';
import {Card, CardContent , CardMedia, Grid, Typography } from '@material-ui/core';
import "./HomePage.css";
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade , withStyles} from '@material-ui/core/styles';

const useStyles = theme => ({
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius, 
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(140),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    } 
  });

class HomePage extends Component {
    state = {
        candidates : []
    }
    componentDidMount(){
        this.props.getCandidateData();
    }
    static getDerivedStateFromProps(props){
        return { candidates : props.candidates}
    }
    onSearch = (e) =>{
        let serachVal = e.target.value.trim ; 
        let obj =[] ;
        if(serachVal !== "") {
         obj = this.state.candidates.filter(ele=>{
            let val = ele.name?ele.name : ""
            return val.toString().indexOf(serachVal)>-1;
        })
        this.setState({ candidates : obj, searchText :  serachVal})
    }
        else{
            this.setState ({candidates :  this.props.candidates, searchText :  serachVal})
        }
      
    }
    render() {
        const { candidates } =this.state ;
        const { classes } = this.props;
        return (
           <MainDrawer>
               <Grid container spacing={3}>
                    <Grid item xs ={12} sm={12} md ={12} lg ={12}>
                            <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                onChange ={this.onSearch}
                            />
                    </div>
                </Grid>
           
                   {
                        candidates.map(ele=>{
                            return  <Grid item xs= {12} sm={12} md ={3} lg ={3} key ={ele.id} >
                                        <Link to = {`/${ele.id}`}>
                                        <Card className="Card" style ={{borderRadius: "34px",
                                            boxShadow:"12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3)"}}>
                                        <CardMedia
                                            component="img"
                                            alt={ele.id}
                                            height="250"
                                            image={ele.Image}
                                            />
                                            <CardContent style ={{maxHeight:'4em'}}>
                                            <Typography gutterBottom style={{textAlign:"center", fontSize :"16px"}}>
                                                {ele.name}
                                            </Typography>
                                            </CardContent>
                                        </Card>
                                        </Link>
                                    </Grid>
                        })
                    }
                  
               </Grid>
                
           </MainDrawer>
        )
    }
}
const mapStateToProps =(state)=>{
    return {
        candidates : state.ReducerData.candidates
    }
}
export default connect(mapStateToProps,{getCandidateData})(withStyles(useStyles)(HomePage));

