import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Typography, Avatar, ListItemAvatar, ListItemText, Divider, ListItem, List, Grid} from '@material-ui/core';
import {connect} from 'react-redux';

const useStyles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: '100ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});
class ShortRejectList extends Component {
    render() {
        const {classes, candiArr, status} = this.props ;
        return (
            <Grid container>
            <Grid item xs={0} sm ={0} md={3} lg ={3} >
                
            </Grid>
            <Grid container item xs ={12} sm ={12} md= {8} lg ={8} >
            <Grid item xs={12} sm={12} lg ={12} >
                <Typography style={{fontSize : '20px',marginLeft : '23%'}}>
                {status.toUpperCase()} CANDIDATES
                </Typography>
            </Grid>
            <Grid item xs ={12} sm={12} md={12} lg ={12}>
            <List className={classes.root}>
            {candiArr.length>0 && candiArr.map(ele=>{return <><ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="image" src={ele.Image} />
                </ListItemAvatar>
                <ListItemText
                primary={ele.name}
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        User Id  
                    </Typography>
                    {` - ${ele.id}`}
                    <br>
                    </br> 
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        Status 
                    </Typography>
                    {` - ${status}`}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider/>
    </>})
    }
    </List>
    </Grid>
    </Grid>
    </Grid>
        )
    }
}
export default ((withStyles)(useStyles)(ShortRejectList));
