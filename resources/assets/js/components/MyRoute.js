import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Example from './Example';
import Navigation from './Navigation';

const NewRoute = () => {
    return (
        <div>
            <p>old</p>
        </div>
    );
}
const Contact = () => {
    return (
        <div>
            <p>Contact</p>
        </div>
    );
}
const Home = () => {
    return (
        <div>
            <p>home</p>
        </div>
    );
}

export default class MyRoute extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/new" component={Example} />
                        <Route path="/old" component={NewRoute} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

//export default MyRoute;

if (document.getElementById('example')) {
    ReactDOM.render(<MyRoute />, document.getElementById('example'));
}