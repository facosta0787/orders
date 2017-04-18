import React, { Component } from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Loading extends  Component{

 constructor(props){
  super(props);
 }
 /*<CircularProgress size={64} thickness={5} /> style={style.refresh}*/
 render(){
  return(
  <Spinner>
   <MuiThemeProvider>
    <div>
     <RefreshIndicator
      size={50}
      left={10}
      top={0}
      status={this.props.visible}
      loadingColor='#00305A'
     />
    </div>
   </MuiThemeProvider>
  </Spinner>
  );
 }
}
export default connect(mapStateToProps)(Loading);

function mapStateToProps(state){
 return{
  visible: state.visible,
 }
}

const Spinner = styled.div`
 position: absolute;
 left: calc(50% - 50px);
 top: 50%;
 padding: 0;
 text-align: center;
 z-index: 100;
`

const style = {
 container: {
  position: 'relative',
 },
 refresh: {
  display: 'inline-block',
  position: 'relative',
 },
};