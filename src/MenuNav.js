import React from 'react'
import { Tabs, Tab } from 'react-bootstrap-tabs';
import DynamicTable from './CreateTable';

class MenuNavBar extends React.Component {
    render() {
        let tabs = this.props.ChangeState.meals.map((meal, idx) => {
            return (
                <Tab label={meal} key={meal}>
                    <DynamicTable  MealName={meal}/>
                </Tab>);
        })

        return (
            <Tabs>
                {tabs}
            </Tabs>
        )

    }
}

export default MenuNavBar;


