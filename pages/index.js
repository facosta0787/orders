import React, { Component } from 'react';
import fetch from  'isomorphic-fetch';
import styled from 'styled-components';
import ToolBar from '../app/components/tool-bar';
import Cargando from '../app/components/loading';
import ClienteMaterial from '../app/components/cliente';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Home extends Component{

 constructor(props) {
  super(props);
  try { injectTapEventPlugin(); } catch (e) {};
  this.state = {
   data:[],
   loading:false
  };
 }

 static async getInitialProps(){
  const URL = `http://vmr.tarrao.co/data/syncclientes/05`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
 }

 componentDidMount() {

  return null;
 }

 render(){
  if(this.props.Clientes.length != 0){
   return(
    <div>
        <Wrapper>
            <ToolBar/>
        </Wrapper>

        <UlList>{this.props.Clientes.map(
         cliente => {
          return(
           <ClienteMaterial {...cliente}/>
          );
         }
        )}</UlList>
    </div>
   );
  }else {
   return (
    <Spinner>
        <Cargando />
    </Spinner>
   );

  }
 }


}
export default Home;

const Wrapper = styled.section`
  position: fixed;
  /*bottom: 0;*/
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
`;

const Titulo = styled.h3`
font-family: 'Roboto', sans-serif;
text-align: center;
margin:auto;

`
const Spinner = styled.div`
position: absolute;
left: 50%;
top: 50%;
padding: 0;
text-align: center;
img{
    width: 64px;
    height: 64px;
}
`
const UlList = styled.ul`
padding: 0px;
margin: 0px 20px 0px 20px;
margin-top: 100px;
z-index: 0;
`
