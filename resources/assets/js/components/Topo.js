import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Topo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: props.title
        };
    }

    mudarTitulo() {
        this.setState({titulo: this.state.titulo + ' oi'});
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header" onClick={()=> this.mudarTitulo()}>
                                Topo {this.state.titulo}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
