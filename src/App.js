import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AlcoholsList from './components/alcoholsList/';
import Header from './components/header/';
import {MuiThemeProvider} from 'material-ui/styles';
import './App.css';


injectTapEventPlugin();
class App extends Component {
    render() {
        return (
            <MuiThemeProvider >
                <div className="App">
                    <Header />
                    <AlcoholsList />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
