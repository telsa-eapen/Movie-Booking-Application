import React, { Component } from 'react';
import Header from '../../common/header/Header.js';import Select from '@material-ui/core/Select';
import GridList from '@material-ui/core/GridList';import MenuItem from '@material-ui/core/MenuItem';
import moviesData from '../../common/moviesData.js';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';import genres from '../../common/genre.js';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class Home extends Component
{
    render(){
         
        return(
         <div > <Header/>
          <div style={{textAlign:'center',background:'#ff9999',padding:'8px',fontSize:'1rem'}}>Upcoming Movies</div>
        
            <div style={{display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              overflow: 'hidden'}}><GridList style={{flexWrap: 'nowrap',transform: 'translateZ(0)'}} cols={6}>
            {
                moviesData.map((movies)=>
                <GridListTile key={movies.poster_url}>
               <img src={movies.poster_url} alt={movies.title} />
               <GridListTileBar title={movies.title}/>
                </GridListTile>)
            }
        </GridList>
        </div>
        <div className="flex-container" style={{display:'flex'}}>
        <div className="left" style={{width:'76%'}}>
        <GridList style={{transform: 'translateZ(0)'}} cols={4}>
            {
                moviesData.map((movies)=>
                <GridListTile key={movies.poster_url} style={{height:'350', padding:'5px'}}>
               <img src={movies.poster_url} alt={movies.title} />
               <GridListTileBar title={movies.title} subtitle={movies.release_date}/>
                </GridListTile>)
            }
        </GridList>
        </div>
        <Card>
            <CardContent>FIND MOVIES BY:</CardContent>
            <CardActions>
                <FormControl>
                
      <TextField id="standard-basic" label="Movie Name" />
      <Select label="Genres">
          {
              genres.map((genre) =>
          
          <MenuItem value={genre.id}>{genre.name}</MenuItem>
          )}
        </Select>
        <FormControl label="Release Start Date"></FormControl>
        <TextField type="date" ></TextField>
      
        <Button variant="contained" color="primary" disableElevation>
  APPLY
</Button>
                </FormControl>
            </CardActions>
        </Card>
        </div>
          </div>
        );
    }
}
export default Home;