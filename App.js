import React, { Component } from 'react';
import Navigator from './src/components/App';
import {Provider} from 'react-redux';
import store from './src/store';


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}
