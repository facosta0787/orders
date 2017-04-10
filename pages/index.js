import React, { Component } from 'react';
import fetch from  'isomorphic-fetch';
import styled from 'styled-components';
import Header from '../app/components/Header';
import Cargando from '../app/components/Loading';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ClienteComponent from '../app/components/Cliente';

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
                        <Header />
                    </Wrapper>
                    <Content>
                        <ul>{this.props.Clientes.map(
                            cliente => {
                                return(
                                    <ClienteComponent {...cliente}/>
                                );
                            }
                        )}
                        </ul>
                    </Content>
                </div>
            );
        }else {
            return (
                <div>
                    <Wrapper>
                        <Header />
                    </Wrapper>
                    <Spinner>
                        <Cargando />
                    </Spinner>
                </div>
            );

        }
    }


}
export default Home;

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
