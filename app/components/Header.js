import React, { Component } from 'react';
import styled from 'styled-components';
import ToolBar from './Tool-Bar';

class Header extends Component{

    render(){
        return(
            <Head>
                <ToolBar />
            </Head>
        );
    }
}
export default Header;

const Head = styled.div`
    margin: 0;
    padding 0;
    
`;