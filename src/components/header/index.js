import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { browserHistory } from 'react-router'

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    toggleMenu = () => this.setState({open: !this.state.open});

    navigateTo(route) {
        browserHistory.push(`${route}`);
        this.setState({open: false});
    }

    render() {
        return (
            <div>
                <AppBar
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onTouchTap={this.toggleMenu}
                />
                <Drawer open={this.state.open}>
                    <MenuItem onTouchTap={() => this.navigateTo(`/`)}>Alcohols</MenuItem>
                    <MenuItem onTouchTap={() => this.navigateTo(`/cocktails`)}>Cocktails</MenuItem>
                </Drawer>
            </div>
        );
    }
}