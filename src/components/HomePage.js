import React, { Component } from 'react'
import MainDrawer from './partials/MainDrawer';
import {getCandidateData} from '../redux/actions/action';
import {connect } from 'react-redux';
import {Card, CardContent , CardMedia, Grid, Typography } from '@material-ui/core';
import "./HomePage.css";
import { Link } from 'react-router-dom';

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
        let serachVal = e.target.value ; 
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
        return (
           <MainDrawer>
               <Grid container spacing={3}>
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
export default connect(mapStateToProps,{getCandidateData})(HomePage);

