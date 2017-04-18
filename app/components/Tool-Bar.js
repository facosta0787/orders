import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ToolBar extends  Component{

 constructor(props){
  super(props);
 }

 render(){
  return(
   <MuiThemeProvider>
       <AppBar title="Pedidos - React.JS" style={{backgroundColor:'#00305A'}}/>
   </MuiThemeProvider>
  );
 }
}
export default ToolBar;