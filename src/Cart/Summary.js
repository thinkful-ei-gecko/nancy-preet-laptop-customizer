import React, { Component } from 'react';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}); 

class Summary extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map(key => {
            return (
                <div className="summary__option" key={key}>
                    <div className="summary__option__label">{key} </div>
                    <div className="summary__option__value">{this.props.selected[key].name}</div>
                    <div className="summary__option__cost">
                    {USCurrencyFormat.format(this.props.selected[key].cost)}
                    </div>
                </div>
            )         
        })
        return summary
    }
}
export default Summary; 
