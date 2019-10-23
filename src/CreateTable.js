import React from 'react'

class PopulateTable extends React.Component{
    render(){ 
        let data = JSON.parse(localStorage.getItem(this.props.ListItem))

        return data.map(item => <tr>{item.description} {item.price}</tr>)
    }
}

class DynamicTable extends React.Component{
    render(){ 
        return(
            <div>
                <table>
                    <PopulateTable ListItem={this.props.MealName} />
                </table>  
            </div>
            
        )
    }
}

export default DynamicTable;