import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Loading extends  Component{

 constructor(props){
  super(props);
 }

 render(){
  return(
   <MuiThemeProvider>
    <div>
     <CircularProgress size={60} thickness={5}/>
    </div>
   </MuiThemeProvider>
  );
 }
}
export default Loading;