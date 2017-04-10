import React, { Component } from 'react';
import Router from 'next/router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class ClienteMaterialize extends Component{
    constructor(props){
        super(props);

    }
    handleClick = event =>{

        Router.push({
            pathname: '/',
            query: {}
        });

    };

    render(){
        const titulo = "Pedido Numero: "+this.props.numero;
        const subTitulo = "Fecha: "+this.props.fecha;
        const total = "Valor del Pedido: "+this.props.vlrTotalVenta;
        const unidades = "Total Unidades: "+this.props.totUnidades;
        return(
            <div>
                <MuiThemeProvider>

                    <Card>
                        <CardHeader
                            title={titulo}
                            subtitle={subTitulo}
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        <CardActions>

                        </CardActions>
                        <CardText expandable={true}>
                            {total}<br />
                            {unidades}
                        </CardText>
                    </Card>
                </MuiThemeProvider>
                <br />
            </div>
        );
    }
}
export default ClienteMaterialize;