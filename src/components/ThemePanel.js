import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import SvgLeft from 'material-ui/svg-icons/navigation/chevron-left.js';
import SvgRight from 'material-ui/svg-icons/navigation/chevron-right.js';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

import injectTapEventPlugin from 'react-tap-event-plugin';
function inject() { // note feature! (move to index)
    try {
        injectTapEventPlugin();
    } catch (err) {
        console.log(err);
    }
}
inject();


const propTypes = {
    themesNameList: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    defautThemeInd: React.PropTypes.number.isRequired,
    onThemeSelect: React.PropTypes.func.isRequired,
    onToggleSideBar: React.PropTypes.func.isRequired,
    isSideBarOpen: React.PropTypes.bool.isRequired,
}

const defaultProps = {
    themesNameList: ['BaseLight', 'BaseDark'],
    defautThemeInd: 0,
    onThemeSelect: () => {},
    onToggleSideBar: () => {},
    isSideBarOpen: false,
}

const contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default class ThemeToolbar extends React.Component {

    constructor(props) {
        super(props);

        this.menuItems = props.themesNameList.map(
            (val, ind) => (<MenuItem value={ind} key={ind} primaryText={val} />)
        );
        this.state = {
            value: props.defautThemeInd,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, value) {
        this.setState({ value }, this.props.onThemeSelect(value));
    }

    render() {
        return (
            <div
               style={{
                    display: 'flex',
                    backgroundColor: this.context.muiTheme.palette.alternateTextColor,
                }}
            >
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    underlineStyle={{ /*border: 'solid 2px black'*/ }}
                    iconStyle={{ fill: this.context.muiTheme.palette.textColor }}
                >
                    {this.menuItems}
                </DropDownMenu>
                <IconButton
                    tooltip={this.props.isSideBarOpen ? 'Close side bar' : 'Open side bar'}
                    onTouchTap={() => this.props.onToggleSideBar(!this.props.isSideBarOpen)}
                    tooltipPosition="bottom-left"
                >
                    {this.props.isSideBarOpen ? <SvgRight /> : <SvgLeft />}
                </IconButton>

            </div>
        );
    }
}

ThemeToolbar.propTypes = propTypes;
ThemeToolbar.defaultProps = defaultProps;
ThemeToolbar.contextTypes = contextTypes;

/*
    todo: snackbar буфер (вкл/откл), таблица / таблица.свойство = значение

*/
