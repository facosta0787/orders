import React, { Component } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Header from '../app/components/Header';
import PedidosComponent from '../app/components/Pedido';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

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
        return(
            <div>
                <Wrapper>
                    <Header />
                </Wrapper>
                <Content>
                    <Contoles>
                        <MuiThemeProvider>
                            <RaisedButton label="Volver" backgroundColor="#8BC34A" onTouchTap={this.handleClick} style={}/>
                        </MuiThemeProvider>
                    </Contoles>
                    <UList>{this.props.pedidos.map(
                        pedido => {
                            return(
                                <PedidosComponent {...pedido}/>
                            );
                        }
                    )}
                    </UList>
                </Content>
            </div>
        );
    }

}

export default Pedidos;

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

const Contoles = styled.div`
    margin-left: calc(100% - 100px);
`;

const UList = styled.ul`
    margin-top: 15px;
`;
