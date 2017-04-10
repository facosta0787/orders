import React, { Component } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import ToolBar from '../app/components/tool-bar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Pedidos extends Component{

 constructor(props){
  super(props);
  try { injectTapEventPlugin(); } catch (e) {};
 }

 handleClick= event =>{
  Router.push('/');
 };

 static async getInitialProps({query}){
  let url = `http://vmr.tarrao.co/pedidos/getPedidosCliente/${query.codigo}`;
  if(query.suc != ""){url = url + "/" + query.suc;}
  const response = await fetch(url);
  const json = {pedidos: await response.json()};
  return json;
 }

 render(){
  if(typeof this.props.pedidos === "undefined" || this.props.pedidos.length == 0) {
   return (
    <div>
     <MuiThemeProvider>
      <Wrapper>
       <ToolBar/>
      </Wrapper>
     </MuiThemeProvider>
     <MuiThemeProvider>
      <Contenedor>
       <Item>
        <Msj><span>Cliente sin pedidos</span></Msj>
       </Item>
       <Item>
        <RaisedButton label="Volver" primary={true} onTouchTap={this.handleClick} />
       </Item>
      </Contenedor>
     </MuiThemeProvider>
    </div>
   );
  }
  else{
   return(
    <div>
     <MuiThemeProvider>
      <Wrapper>
       <ToolBar/>
      </Wrapper>
     </MuiThemeProvider>
     <MuiThemeProvider>
      <div>
       <RaisedButton label="Volver" primary={true} onTouchTap={this.handleClick} />
       {this.props.pedidos.map(
        pedido => {
         return(
          <Contenedor>
           <p>Fecha: {pedido.fecha}</p>
           <p>Numero: {pedido.numero}</p>
           <p>Unidades: {pedido.totUnidades}</p>
           <p>Total: {pedido.vlrTotalVenta}</p>
           <hr width="100%"/>
          </Contenedor>
         );
        }
       )}
      </div>
     </MuiThemeProvider>
    </div>
   );
  }

 }
}
export default Pedidos;

const Wrapper = styled.section`
  position: fixed;
  /*bottom: 0;*/
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
`;

const Contenedor = styled.div`
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    margin-top: 100px;
`;

const Item = styled.div`
    width: 33%;
    padding: 5px 0 5px 0;

`;

const Msj = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 1.5rem;
span{
    color: rgba(0, 0, 0, 0.54);
}
`;