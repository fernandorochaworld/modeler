import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Topo from './Topo';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <Topo title="topo 1"></Topo>
                <Topo title="topo 2"></Topo>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Exampleuuu Component</div>

                            <div className="card-body">
                                I'm an example component! 00 11 22 33 44
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
//export default Example;

// if (document.getElementById('example')) {
//     ReactDOM.render(<Example />, document.getElementById('example'));
// }
