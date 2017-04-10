import React, { Component } from 'react';
import Router from 'next/router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class ClienteMaterialize extends Component{
 constructor(props){
  super(props);

 }
 handleClick = event =>{

  Router.push({
   pathname: '/pedidos',
   query: { codigo: this.props.NitCliente,
    suc: this.props.Sucursal,
   }
  });

 };

 render(){
  //console.log(this.state);
  return(
   <div>
    <MuiThemeProvider>
     <Card>
      <CardHeader
       title={this.props.RazonSocial.replace(/\b\w/g, l => l.toUpperCase())}
       subtitle={this.props.NitCliente.concat(' ').concat(this.props.Sucursal)}
       actAsExpander={true}
       showExpandableButton={true}
      />
      <CardActions>
       <FlatButton label="Pedidos" primary={true} onTouchTap={this.handleClick}/>
      </CardActions>
      <CardText expandable={true}>
       {this.props.Direccion}
      </CardText>
     </Card>
    </MuiThemeProvider>
    <br />
   </div>
  );
 }
}
export default ClienteMaterialize;
