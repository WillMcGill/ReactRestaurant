import React from 'react'
import { Tabs, Tab } from 'react-bootstrap-tabs';



class MenuNavBar extends React.Component {
    render() {
        return (
            <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                <Tab label="Tab1">Tab 1 content</Tab>
                <Tab label="Tab2">Tab 2 content</Tab>
            </Tabs>
        )

    }
}

export default MenuNavBar;

