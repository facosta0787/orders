import React, { Component } from 'react';
import fetch from  'isomorphic-fetch';
import styled from 'styled-components';
import Header from '../app/components/Header';
import Cargando from '../app/components/Loading';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ClienteComponent from '../app/components/Cliente';
import withRedux from 'next-redux-wrapper';
import { createStore } from 'redux';
import reducer from '../reducers/reducers';

const data = {
 loading: true,
 visible: 'loading'
};

const makeStore = function(initialState = data){
 return createStore(reducer,initialState);
}

class Home extends Component{

 constructor(props) {
  super(props);
  try { injectTapEventPlugin(); } catch (e) {};
  this.state = {
   data:[],
   loading: true,
   visible: 'loading',
   };
 }

 static async getInitialProps(){
  return {};
 }

 async componentDidMount() {
  const URL = `http://vmr.tarrao.co/data/syncclientesreact/05`;
  const response = await fetch(URL);
  const data = await response.json();
  this.setState({data:data});
  this.setState({loading:false});

  this.props.dispatch({
   type:'SET_VISIBLE_SPINNER',
   payload:{
    visible:'hide',
   }
  });

 }

 render(){
  return(
   <div>
    <Wrapper>
     <Header />
    </Wrapper>
    <Content>
     <Cargando />
     {!this.state.loading &&
      <ul>{this.state.data.Clientes.map(
       cliente => {
        return(
         <ClienteComponent key={cliente.id} {...cliente}/>
        );
       }
      )}
      </ul>
     }
    </Content>
   </div>

  );
 }
}
export default withRedux(makeStore)(Home);

const Wrapper = styled.div`
 position: fixed;
 /*bottom: 0;*/
 left: 0;
 right: 0;
 top: 0;
 z-index: 1;
`;

const Content = styled.div`
 overflow: auto;
 margin-top:64px;
 padding-top: 5px;
 height: calc(100vh - 74px);
 /*border: 1px solid gray;*/
`;
const Titulo = styled.h3`
 font-family: 'Roboto', sans-serif;
 text-align: center;
 margin:auto;
`
const UlList = styled.ul`
 padding: 0px;
 margin: 0px 20px 0px 20px;
 margin-top: 100px;
 z-index: 0;
`
