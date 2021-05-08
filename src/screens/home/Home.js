import React, { Component } from 'react';
import Header from '../../common/header/Header.js';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import moviesData from '../../common/moviesData.js';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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
        </div>
          </div>
        );
    }
}
export default Home;