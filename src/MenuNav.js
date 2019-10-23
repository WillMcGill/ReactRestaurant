import React from 'react'
import { Tabs, Tab } from 'react-bootstrap-tabs';

class MenuNavBar extends React.Component {
    render() {
        return (
            <Tabs onSelect={(index, label) => console.log(label + ' selected')}>


                <Tab label="Breakfast">Tab 1 content</Tab>
                <Tab label="Lunch">Tab 2 content</Tab>
                <Tab label="Dinner">Tab 1 content</Tab>
                <Tab label="Sides">Tab 2 content</Tab>
                <Tab label="Dessert">Tab 1 content</Tab>


            </Tabs>

        )

    }
}

export default MenuNavBar;

