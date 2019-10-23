import React from 'react'

class PopulateTable extends React.Component{
    render(){ 
        return(
            this.props.ListItems.map(idx => {
                console.log(idx.name)
            })
           
           
            
           
        )
    }
}

class DynamicTable extends React.Component{
    render(){ 
        return(
            <div>
                <table>
            <PopulateTable ListItems = {this.props.MealName} />
                </table>
           
            </div>
            
        )
    }
}

export default DynamicTable;