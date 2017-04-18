import React, { Component } from 'react';
import Router from 'next/router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';

class ClienteMaterialize extends Component{
 constructor(props){
  super(props);

 }
 handleClick = event =>{
  this.props.dispatch({
   type:'SET_VISIBLE_SPINNER',
   payload:{
    visible:'loading',
   }
  });
  Router.push({
   pathname: '/pedidos',
   query: { codigo: this.props.NitCliente,
            suc: this.props.Sucursal,
          }
  });
 };

 render(){
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
        <FlatButton label="Pedidos" primary={true} onTouchTap={this.handleClick} style={{color:'#00305A'}}/>
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
export default connect(mapStateToProps)(ClienteMaterialize);

function mapStateToProps(state){
 return{
  loading: state.loading,
  visible: state.visible,
 }
}